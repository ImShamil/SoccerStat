/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Spinner from 'react-bootstrap/Spinner';
import MyTable from './MyTable';
import MyPagination from '../Common/MyPagination';
import MyBreadCrumb from '../Common/MyBreadCrumb';
import DateFilter from '../Common/DateFilter';

function ItemMatches({ path }) {
  const id = useParams();

  let URL = '';

  const [data, setData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [itemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;

  if ((!startDate) || (!finishDate)) {
    URL = `http://api.football-data.org/v2/${path}/${id.id}/matches`;
  } else URL = `http://api.football-data.org/v2/${path}/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`;

  const getData = function () {
    setLoading(true);
    fetch(URL, { headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN } })
      .then((response) => response.json())
      .then((response) => {
        if ('matches' in response) {
          setMatches(response.matches);
        } else {
          setErr(true);
          setData(response);
        }
      })
      .catch((error) => {
        alert('Матчи недоступны');
        if (error === 403) {
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => { getData(); }, [id, (startDate && finishDate), path]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(matches);
  if (err) {
    return (
      <div>
        <h1>
          Error
          {data.errorCode}
        </h1>
        <p>{data.message}</p>
      </div>
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
      <MyBreadCrumb id={id.id} path={path} setErr={setErr} />
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
