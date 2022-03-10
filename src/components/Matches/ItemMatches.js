/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import MyTable from './MyTable';
import MyPagination from '../Common/MyPagination';
import MyBreadCrumb from '../Common/MyBreadCrumb';
import DateFilter from '../Common/DateFilter';
import ErrorPage from '../Info_pages/ErrorPage';
import getPageData from '../../api/getMatchesList';

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

  useEffect(() => {
    getPageData(
      path,
      id,
      startDate,
      finishDate,
      setLoading,
      setErr,
      setData,
      setMatches,
      setName,
    );
  }, [startDate && finishDate]);

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
