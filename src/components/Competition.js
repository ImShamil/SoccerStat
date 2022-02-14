import React from 'react'
import Searchbar from './Searchbar';

 function Competition({currentCompetitionPage}) {

  return (
    <div>
         {
                currentCompetitionPage.map((competition,i)=>(
                    <button type="button" class="btn btn-secondary" key={i}>
                        <p>{competition.name}</p>
                        <p>{competition.area.name}</p>
                    </button>   
                ))
            }
    </div>
  )
}
export default Competition;