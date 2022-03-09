/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';

function MyTable({
  matches, count, firstItemsPage, lastItemsPage, itemsPerPage,
}) {
  const currentMathesPage = (matches.slice(firstItemsPage, lastItemsPage)).length === 0
    ? matches.slice(0, itemsPerPage)
    : matches.slice(firstItemsPage, lastItemsPage);

  const getStatus = (item) => {
    let status;
    switch (item) {
      case 'SCHEDULED':
        status = 'Запланирован';
        break;
      case 'LIVE':
        status = 'В прямом эфире';
        break;
      case 'IN_PLAY':
        status = 'В игре';
        break;
      case 'PAUSED':
        status = 'Пауза';
        break;
      case 'FINISHED':
        status = 'Завершен';
        break;
      case 'POSTPONED':
        status = 'Отложен';
        break;
      case 'SUSPENDED':
        status = 'Приостановлен';
        break;
      case 'CANCELED':
        status = 'Отменен';
        break;
      default:
        status = 'Ошибка';
        break;
    }
    return status;
  };
  if (!count) {
    return (
      <div>
        <p>В заданный период игры не проходят</p>
        <p>Выберите другой период</p>
      </div>
    );
  }

  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          {currentMathesPage.map((item) => (
            <tr>
              <td>{format(new Date(item.utcDate), 'dd.MM.yyyy')}</td>
              <td>{format(new Date(item.utcDate), 'HH:mm')}</td>
              <td>
                {' '}
                {getStatus(item.status)}
              </td>
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
  );
}
export default MyTable;
