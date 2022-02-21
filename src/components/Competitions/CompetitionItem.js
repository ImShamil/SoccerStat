import React from 'react'
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card'

 function CompetitionItem({competition,i}) {
  return (
    
    <Card border="dark" style={{ width: '20px' }}> 
        <Link key={i} to={`/competitions/${competition.id}`}>
            < Card.Body class="card" key={i}>
                <Card.Text>{competition.name}</Card.Text>
                <Card.Text>{competition.area.name}</Card.Text>
            </Card.Body> 
        </Link>
    </Card>
    
     
  )
}
export default CompetitionItem