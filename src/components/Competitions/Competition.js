import React from 'react'
import CompetitionItem from './CompetitionItem';
import CardGroup from 'react-bootstrap/CardGroup'


 function Competition({competitions, firstCompetitionPage,lastCompetitionPage,competitionsPerPage}) {

  const currentCompetitionPage= (competitions.slice(firstCompetitionPage,lastCompetitionPage)).length===0? competitions.slice(0,competitionsPerPage):competitions.slice(firstCompetitionPage,lastCompetitionPage)
  return (
    <CardGroup style={{ display: 'flex' }}>
      
          {
            currentCompetitionPage.map((competition,i)=>(
              <CompetitionItem competition={competition} key={i}/>
            ))
          }
    </CardGroup>
  )
}
export default Competition;