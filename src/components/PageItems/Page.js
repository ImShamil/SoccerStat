import React,{ useEffect, useState }  from 'react';
import PageItems from './PageItems';
import Searchbar from '../Common/Searchbar';
import MyPagination from '../Common/MyPagination';
import Spinner from 'react-bootstrap/Spinner'
import MyButton from './MyButton';


const Page = ({path})=> {
  const AVAILABLE_ID = ['2000','2001','2002','2003','2013','2014','2015','2016','2017','2018','2019','2021','2152' ];
  
  
  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/${path}`,{ headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      console.log(data)
      if ('competitions' in response){
        setPage(response.competitions)
      }
      if('teams' in response){
        setPage(response.teams)
      }
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

  let itemsPerPage;
  if(path==='teams'){
    itemsPerPage=10
  }else itemsPerPage=9


  const lastItemsPage=currentPage*itemsPerPage;
  const firstItemsPage=lastItemsPage-itemsPerPage;
  const paginate=pageNumber=>setCurrentPage(pageNumber);
 
  if (loading){
      return(
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
            )
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