import React from 'react'
import Table from 'react-bootstrap/Table'

 function MyTable () {
  return (
    <div>
        <h3>Заглушка:Фильтр по дате</h3>
    <Table striped bordered hover>
        <tbody>
          <tr>
            <td>ДД.ММ.ГГ</td>
            <td>ЧЧ ММ</td>
            <td>Статус</td>
            <td>Команда А</td>
            <td>-</td>
            <td>Команда Б</td>
            <td>X:Y</td>
            <td>(Z:G)</td>
            <td>(N:M)</td>
          </tr>
        </tbody>
    </Table>
    </div>
  )
}
export default MyTable