import React, {useState } from 'react'


 function Searchbar() {
    const [value,setValue]=useState(' ');

    // const filtredCompetitions=competitions.map(competition=>{
    //     if( competition.name.toLowerCase()===value.toLowerCase()){
    //         return competitions.competition
    //     }
    //     return competitions
    // })
    // search(filtredCompetitions);
    

  return (
    <div>
        <form class="d-flex">
        <input class="form-control me-2" 
        type="search" 
        placeholder="Поиск" 
        aria-label="Search" 
        onChange={(event)=>setValue(event.target.value)}/>
        <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
    </div>
  )
}
export default Searchbar;
