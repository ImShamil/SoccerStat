/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import Spinner from 'react-bootstrap/Spinner';
import MyTable from './MyTable';
import MyPagination from '../Common/MyPagination';
import MyBreadCrumb from '../Common/MyBreadCrumb';
import DateFilter from '../Common/DateFilter';
import ErrorPage from '../Common/ErrorPage';

function ItemMatches({ path }) {
  const id = useParams();
  const search = useLocation();
  const [data, setData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [itemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;
  let URL = `http://api.football-data.org/v2/${path}/${id.id}/matches`;

  if ((startDate) || (finishDate)) {
    URL = `http://api.football-data.org/v2/${path}/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`;
  }
  useEffect(() => {
    setLoading(true);
    setErr(false);
    fetch(
      URL,
      { headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN } },
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.errorCode) {
          setErr(true);
          setData(response);
          console.log(response);
        } else setMatches(response.matches);
        if (path === 'competitions') {
          setName(response.competition.name);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [startDate && finishDate]);
  console.log(name);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (err) {
    return (
      <ErrorPage data={data} />
    );
  }
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <MyBreadCrumb
        id={id.id}
        path={path}
        name={path === 'competitions' ? name : search.search}
      />
      <DateFilter
        startDate={startDate}
        finishDate={finishDate}
        setStartDate={setStartDate}
        setFinishDate={setFinishDate}
        setCurrentPage={setCurrentPage}
      />
      <h2>Матчи</h2>
      <MyTable
        matches={matches}
        count={matches.length}
        firstItemsPage={firstItemsPage}
        lastItemsPage={lastItemsPage}
        itemsPerPage={itemsPerPage}
      />
      <MyPagination
        perPage={itemsPerPage}
        total={matches.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}
export default ItemMatches;
