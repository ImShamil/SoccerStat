import React, { useEffect, useState } from 'react';
import PageItems from './PageItems';
import SearchFilter from '../Common/SearchFilter/SearchFilter';
import Paginator from '../Common/Paginator/Paginator';
import AvailableCompetitionsButton from './AvailableCompetitionsButton';
import ErrorPage from '../Info_pages/ErrorPage';
import getPageList from '../../api/getPageList';
import OoopsPage from '../Info_pages/OoopsPage';
import AllCompetitionsButton from './AllCompetitionsButton';
import Loader from '../Common/Loader/Loader';

function Page({ path }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterList, setFilterList] = useState([]);
  const [err, setErr] = useState(false);
  const [notEmpty, setNotEmpty] = useState(false);

  let itemsPerPage;

  useEffect(() => {
    getPageList(
      path,
      setLoading,
      setErr,
      setData,
    );
  }, [path]);

  useEffect(() => { setCurrentPage(1); }, [path]);

  if (path === 'teams') {
    itemsPerPage = 10;
  } else itemsPerPage = 9;

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
      <SearchFilter
        data={data}
        setCurrentPage={setCurrentPage}
        setFilterList={setFilterList}
        setNotEmpty={setNotEmpty}
      />
      {path === 'competitions' && !notEmpty
        ? (
          <div>
            <AvailableCompetitionsButton
              competitions={filterList}
              setCompetitions={setFilterList}
              setCurrentPage={setCurrentPage}
            />
            <AllCompetitionsButton
              competitions={data}
              setCompetitions={setFilterList}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )
        : null}
      {!filterList.length
        ? <OoopsPage /> : (
          <PageItems
            page={filterList}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            path={path}
          />
        )}
      <Paginator
        perPage={itemsPerPage}
        total={filterList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>

  );
}
export default Page;
