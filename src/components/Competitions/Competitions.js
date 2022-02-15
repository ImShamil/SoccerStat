import React,{ useEffect, useState }  from 'react';
import Competition from './Competition';
import Searchbar from './Searchbar'

const Competitions = ()=> {
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
      
  })

  if (loading){
      return<h2>Loading...</h2>
  }
  
  return (
      <div>
      <Searchbar setValue={setValue}setCurrentPage={setCurrentPage}/>
      <Competition competitions={filterCompetition} currentPage={currentPage} setCurrentPage={setCurrentPage}   />
      </div>
      
  )
}
export default Competitions