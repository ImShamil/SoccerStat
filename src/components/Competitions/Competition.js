import React from 'react'
import CompetitionItem from './CompetitionItem';


 function Competition({competitions, firstCompetitionPage,lastCompetitionPage,competitionsPerPage}) {
  const currentCompetitionPage= (competitions.slice(firstCompetitionPage,lastCompetitionPage)).length===0? competitions.slice(0,competitionsPerPage):competitions.slice(firstCompetitionPage,lastCompetitionPage)
  return (
    <div>
          {
            currentCompetitionPage.map((competition,i)=>(
                <CompetitionItem competition={competition} key={i}/>
            ))
          }
        
    </div>
  )
}
export default Competition;