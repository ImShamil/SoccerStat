import './MatchesList.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';
import MatchesNotFound from '../Info_pages/MatchesNotFound';

function MatchesList({
  matches,
  count,
  itemsPerPage,
  currentPage,
}) {
  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;
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
      <MatchesNotFound />
    );
  }

  return (
    <div className="matchListContainer">
      <h2>Матчи</h2>
      <Table size="sm" striped bordered hover>
        <tbody>
          {currentMathesPage.map((item) => (
            <tr>
              <td>{format(new Date(item.utcDate), 'dd.MM.yy')}</td>
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
export default MatchesList;
