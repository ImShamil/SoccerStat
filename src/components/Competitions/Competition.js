import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';


 function Competition({competitions, firstCompetitionPage,lastCompetitionPage,competitionsPerPage}) {

  const currentCompetitionPage= (competitions.slice(firstCompetitionPage,lastCompetitionPage)).length===0? competitions.slice(0,competitionsPerPage):competitions.slice(firstCompetitionPage,lastCompetitionPage)
  return (
    <CardGroup style={{ display: 'flex' }}>
          {
            currentCompetitionPage.map((competition,i)=>(
              <Card border="dark" style={{ width: '20px' }}> 
                <Link key={i} to={`/competitions/${competition.id}`}>
                  <Card.Body class="card" key={i}>
                    <Card.Text>{competition.name}</Card.Text>
                    <Card.Text>{competition.area.name}</Card.Text>
                  </Card.Body> 
                </Link>
              </Card>
            ))
          }
    </CardGroup>
  )
}
export default Competition;