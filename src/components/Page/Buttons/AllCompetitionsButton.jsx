import './Buttons.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

function AllCompetitionsButton({
  competitions,
  setCompetitions,
  setCurrentPage,
}) {
  const handleOnClick = () => {
    setCompetitions(competitions);
    setCurrentPage(1);
  };

  return (
    <Button variant="success" onClick={handleOnClick}>
      Показать все лиги
    </Button>
  );
}
export default AllCompetitionsButton;
