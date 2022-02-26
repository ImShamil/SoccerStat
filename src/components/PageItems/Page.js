import React,{ useEffect, useState }  from 'react';
import PageItems from './PageItems';
import Searchbar from '../Common/Searchbar';
import MyPagination from '../Common/MyPagination';

import MyButton from './MyButton';


const Page = ({path})=> {
  const AVAILABLE_ID = ['2000','2001','2002','2003','2013','2014','2015','2016','2017','2018','2019','2021','2152' ];
  
  
  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/${path}`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      if ('competitions' in response){
        setPage(response.competitions)
      }
      if('teams' in response)
        setPage(response.teams)
    })
    .catch(error=>{
      console.log(error)
    })
    .finally(()=>{
      setLoading(false);
    })
  }
  useEffect(()=>{getData()},[path]);  

  const [data, setData]=useState([]);
  const [page,setPage]=useState([]);
  const [loading ,setLoading]=useState(false);
  const [currentPage, setCurrentPage]=useState(1);
  const [filterList,setFilterList]=useState([]);

  const [itemsPerPage]= useState(9);
  const lastItemsPage=currentPage*itemsPerPage;
  const firstItemsPage=lastItemsPage-itemsPerPage;
  const paginate=pageNumber=>setCurrentPage(pageNumber);
 
  if (loading){
      return<h2>Loading...</h2>
  }

  return (
      <div>
      <Searchbar data={page} setCurrentPage={setCurrentPage}setFilterList={setFilterList} />
      {path==="competitions"?<MyButton competitions={page} AVAILABLE_ID={AVAILABLE_ID} setCompetitions={setPage}/>:null}
      <PageItems page={filterList} firstItemsPage={firstItemsPage} lastItemsPage={lastItemsPage} itemsPerPage={itemsPerPage} path={path}/>
      <MyPagination perPage={itemsPerPage} total ={filterList.length}  currentPage={currentPage} paginate={paginate} />
      </div>
      
  )
}
export default Page