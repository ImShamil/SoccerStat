import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import 'moment/locale/ru'

 function MyTable ({matches}) {

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

   console.log(matches)
  return (
    <div>
        <h3>Заглушка:Фильтр по дате</h3>
        <Table striped bordered hover>
      <tbody>
    {matches.map((item,i)=>(
        <tr key={i}>
          <td>{moment(item.utcDate).format("LL")}</td>
          <td>{moment(item.utcDate).format('LT')}</td>
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