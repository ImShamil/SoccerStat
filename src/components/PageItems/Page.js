/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PageItems from './PageItems';
import Searchbar from '../Common/Searchbar';
import MyPagination from '../Common/MyPagination';
import MyButton from './MyButton';
import ErrorPage from '../Info_pages/ErrorPage';
import getPageList from '../../api/getPageList';
import OoopsPage from '../Info_pages/OoopsPage';

function Page({ path }) {
  const AVAILABLE_ID = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2021',
    '2152'];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterList, setFilterList] = useState([]);
  const [err, setErr] = useState(false);
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

  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (err) {
    return (
      <ErrorPage data={data} />
    );
  }

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          Loading...
        </span>
      </Spinner>
    );
  }
  console.log(filterList.length);

  return (
    <div>
      <Searchbar
        data={data}
        setCurrentPage={setCurrentPage}
        setFilterList={setFilterList}
      />
      {path === 'competitions'
        ? (
          <MyButton
            competitions={data}
            AVAILABLE_ID={AVAILABLE_ID}
            setCompetitions={setData}
          />
        )
        : null}
      {!filterList.length
        ? <OoopsPage /> : (
          <PageItems
            page={filterList}
            firstItemsPage={firstItemsPage}
            lastItemsPage={lastItemsPage}
            itemsPerPage={itemsPerPage}
            path={path}
          />
        )}

      <MyPagination
        perPage={itemsPerPage}
        total={filterList.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>

  );
}
export default Page;
