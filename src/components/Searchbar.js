import React, {useState } from 'react'


 function Searchbar({competitions,search}) {
    // const [value,setValue]=useState(' ');
    
    const value='WC Qualification CAF';

        const filtredCompetitions=competitions.map((competition)=>{
        if( competition.name.toLowerCase()===value.toLowerCase()){
            console.log(competition)
        }
    })
    
    
  return (
    <div>
        <form class="d-flex">
        <input class="form-control me-2" 
        type="search" 
        placeholder="Поиск" 
        aria-label="Search" 
        />
        <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
    </div>
  )
}
export default Searchbar;
