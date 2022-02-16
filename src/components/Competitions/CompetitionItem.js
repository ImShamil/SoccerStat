import React from 'react'

 function CompetitionItem({competition,i}) {
  return (
   <button type="button" class="btn btn-secondary" key={i}>
        <p>{competition.name}</p>
        <p>{competition.area.name}</p>
    </button>   
  )
}
export default CompetitionItem