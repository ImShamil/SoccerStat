import React from 'react'
import {Link} from "react-router-dom";

 function CompetitionItem({competition,i}) {
  return (
    
    <div> 
        <Link to={`/${competition.id}`}>
            <button type="button" class="btn btn-secondary" key={i}>
                <p>{competition.name}</p>
                <p>{competition.area.name}</p>
            </button> 
        </Link>
    </div>
    
     
  )
}
export default CompetitionItem