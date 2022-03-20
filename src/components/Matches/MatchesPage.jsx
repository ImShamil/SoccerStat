import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import getMatchesList from '../../api/getMatchesList';
import Loader from '../Common/Loader/Loader';
import Paginator from '../Common/Paginator/Paginator';
import BreadCrumb from '../Common/BreadCrumb/BreadCrumb';
import DateFilter from '../Common/DateFilter/DateFilter';
import MatchesList from './MatchesList';
import ErrorPage from '../Info_pages/ErrorPage';

function MatchesPage({ path }) {
  const id = useParams(); // id выбранной лиги или команды
  const search = useLocation(); // возвращает текущий URL
  const [data, setData] = useState([]); // полученные данные
  const [matches, setMatches] = useState([]);// декодированный список матчей
  const [loading, setLoading] = useState(false); // состояние загрузки
  const [err, setErr] = useState(false); // флаг ошибки
  const [startDate, setStartDate] = useState(null); // стартовая дата для фильтрации
  const [finishDate, setFinishDate] = useState(null); // конечная дата для фильтрации
  const [itemsPerPage] = useState(10);// количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1); // номер текущей страницы
  const [name, setName] = useState('');// название лиги для навигационной цепочки

  useEffect(() => {
    getMatchesList(
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
