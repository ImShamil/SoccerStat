import React from 'react'
import Button from 'react-bootstrap/Button'


 function MyButton({competitions,AVAILABLE_ID,setCompetitions}) {
    const showAvaliable=function(){
    const filterSet = new Set(AVAILABLE_ID);
    const avalilableList=competitions.filter(competition=>(filterSet.has(competition.id.toString())))
    setCompetitions(avalilableList)
        }
      
        
  return (
    <Button onClick={showAvaliable}> Показать доступные лиги </Button>
  )
}
export default MyButton;