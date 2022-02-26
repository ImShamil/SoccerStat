import React from 'react'
import Table from 'react-bootstrap/Table'
import { format } from 'date-fns'

 function MyTable ({matches,count}) {

  const getStatus=(item)=>{
    let status='';
    switch(item){
        case "SCHEDULED":
          return status="Запланирован"

        case "LIVE":
          return status="В прямом эфире"

        case "IN_PLAY":
          return status="В игре"

        case "PAUSED":
          return status="Пауза"

        case "FINISHED":
          return status="Завершен"

        case "POSTPONED":
          return status="Отложен"

        case "SUSPENDED":
          return status="Приостановлен"

        case "CANCELED":
          return status="Отменен"

        default:
          return status="Ошибка"
        
    }
  }
  if (count===0){
    return (<div>
      <p>В заданный период игры не проходят</p>
      <p>Выберите другой период</p>
    </div>)
  }
  
  return (
    <div>
        <Table striped bordered hover>
      <tbody>
    {matches.map((item,i)=>(
        <tr key={i}>
          <td>{format(new Date(item.utcDate), 'dd.MM.yyyy')}</td>
          <td>{format(new Date(item.utcDate),'HH:mm')}</td>
          <td> {getStatus(item.status)}</td>
          <td>{item.homeTeam.name}</td>
          <td>-</td>
          <td>{item.awayTeam.name}</td>
          <td>{item.score.fullTime.homeTeam}</td>
          <td>{item.score.fullTime.awayTeam}</td>
          <td>{item.score.extraTime.homeTeam}</td>
        </tr>
    ))}
    </tbody>
  </Table>
    </div>
  )
}
export default MyTable