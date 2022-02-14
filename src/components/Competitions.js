import React,{ useEffect, useState }  from 'react';
import Competition from './Competition';
import Pagination from './Pagination';
import Searchbar from './Searchbar';

const Competitions = ()=> {
    const [data, setData]=useState([]);
    const [competitions,setCompetitions]=useState([]);
    const [loading ,setLoading]=useState(false);
    // const [currentPage, setCurrentPage]=useState(1);
    // const [competitionsPerPage]= useState(9);

    // const lastCompetitionPage=currentPage*competitionsPerPage;
    // const firstCompetitionPage=lastCompetitionPage-competitionsPerPage;

    // const currentCompetitionPage=competitions.slice(firstCompetitionPage,lastCompetitionPage)
    
    // const paginate=pageNumber=>setCurrentPage(pageNumber);
   

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

    // const search=competition=>setCompetitions(competition)

    const [value,setValue]=useState(' ');
    
    const filterCompetition=competitions.map(competition=>{
        if (competition.name.toLowerCase().includes(value.toLowerCase())) return competition
        
    })

    console.log(filterCompetition)
    
    if (loading){
        return<h2>Loading...</h2>
    }

    return (
        <div>

       <div>
        <form class="d-flex">
        <input class="form-control me-2" 
        type="search" 
        placeholder="Поиск" 
        aria-label="Search" 
        onChange={(event)=>setValue(event.target.value)}
        />
        <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
        </div>
        <Competition competitions={filterCompetition} data={data}/>
        
        
        </div>
        
    )
}
export default Competitions