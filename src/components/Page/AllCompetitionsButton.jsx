import React from 'react';
import Button from 'react-bootstrap/Button';

function AllCompetitionsButton({
  competitions,
  setCompetitions,
}) {
  const handleOnClick = () => {
    setCompetitions(competitions);
  };

  return (
    <Button onClick={handleOnClick}>
      Показать всё
    </Button>
  );
}
export default AllCompetitionsButton;
