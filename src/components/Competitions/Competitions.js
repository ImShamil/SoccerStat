import React,{ useEffect, useState }  from 'react';
import Competition from './Competition';
import Searchbar from '../Searchbar';
import MyPagination from '../MyPagination';

import MyButton from './MyButton';


const Competitions = ()=> {
  const AVAILABLE_ID = ['2000','2001','2002','2003','2013','2014','2015','2016','2017','2018','2019','2021','2152' ];
  
  
  const getData= function(){
    setLoading(true);
    fetch('http://api.football-data.org/v2/competitions/',{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      setCompetitions(response.competitions)
      setLoading(false);
    })
  }
  useEffect(getData,[]);  

  const [data, setData]=useState([]);
  const [competitions,setCompetitions]=useState([]);
  const [loading ,setLoading]=useState(false);
  const [currentPage, setCurrentPage]=useState(1);
  const [value,setValue]=useState('');

  const filterCompetition=competitions.filter(competition=>{
    return competition.name.toLowerCase().includes(value.toLowerCase())
  });

  const [competitionsPerPage]= useState(9);
  const lastCompetitionPage=currentPage*competitionsPerPage;
  const firstCompetitionPage=lastCompetitionPage-competitionsPerPage;
  const paginate=pageNumber=>setCurrentPage(pageNumber);
 
  if (loading){
      return<h2>Loading...</h2>
  }

  return (
      <div>
      <Searchbar setValue={setValue}setCurrentPage={setCurrentPage} value={value} />
      <MyButton competitions={competitions} AVAILABLE_ID={AVAILABLE_ID} setCompetitions={setCompetitions}/>
      <Competition competitions={filterCompetition} firstCompetitionPage={firstCompetitionPage} lastCompetitionPage={lastCompetitionPage} competitionsPerPage={competitionsPerPage}/>
      <MyPagination perPage={competitionsPerPage} total ={filterCompetition.length}  currentPage={currentPage} paginate={paginate} />
      </div>
      
  )
}
export default Competitions