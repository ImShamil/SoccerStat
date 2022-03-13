import './Buttons.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

function AvailableCompetitionsButton({
  competitions,
  setCompetitions,
  setCurrentPage,
}) {
  const AVAILABLE_ID = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2021',
    '2152'];

  const handleOnClick = () => {
    const filterSet = new Set(AVAILABLE_ID);
    const avalilableList = competitions.filter(
      (competition) => (filterSet.has(competition.id.toString())),
    );
    setCompetitions(avalilableList);
    setCurrentPage(1);
  };

  return (
    <Button variant="success" onClick={handleOnClick}>
      Показать доступные лиги
    </Button>
  );
}
export default AvailableCompetitionsButton;
