import './Page.css';
import React, { useEffect, useState } from 'react';
import PageItems from './PageItems';
import SearchFilter from '../Common/SearchFilter/SearchFilter';
import Paginator from '../Common/Paginator/Paginator';
import AvailableCompetitionsButton from './Buttons/AvailableCompetitionsButton';
import ErrorPage from '../Info_pages/ErrorPage';
import getPageList from '../../api/getPageList';
import OoopsPage from '../Info_pages/OoopsPage';
import AllCompetitionsButton from './Buttons/AllCompetitionsButton';
import Loader from '../Common/Loader/Loader';

function Page({ path }) {
  const itemsPerPage = 12;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterList, setFilterList] = useState([]);
  const [err, setErr] = useState(false);
  const [notEmpty, setNotEmpty] = useState(false);

  useEffect(() => {
    getPageList(
      path,
      setLoading,
      setErr,
      setData,
    );
  }, [path]);

  useEffect(() => { setCurrentPage(1); }, [path]);

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
      <div className="filterBar">
        <SearchFilter
          data={data}
          setCurrentPage={setCurrentPage}
          setFilterList={setFilterList}
          setNotEmpty={setNotEmpty}
        />
        {path === 'competitions' && !notEmpty
          ? (
            <div className="buttonGroup">
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
      </div>
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
