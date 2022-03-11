import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Loader from '../Common/Loader/Loader';
import MatchesList from './MatchesList';
import Paginator from '../Common/Paginator/Paginator';
import BreadCrumb from '../Common/BreadCrumb/BreadCrumb';
import DateFilter from '../Common/DateFilter/DateFilter';
import ErrorPage from '../Info_pages/ErrorPage';
import getPageData from '../../api/getMatchesList';

function MatchesPage({ path }) {
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

  if (err) {
    return (
      <ErrorPage data={data} />
    );
  }
  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div>
      <BreadCrumb
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
      <MatchesList
        matches={matches}
        count={matches.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
      <Paginator
        perPage={itemsPerPage}
        total={matches.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}

      />
    </div>
  );
}
export default MatchesPage;
