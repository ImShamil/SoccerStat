import './infoPages.css';
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function MatchesNotFound() {
  return (
    <Alert variant="light">
      <Alert.Heading>Матчи не найдены</Alert.Heading>
      <p>
        В заданный период игры не проходят.
      </p>
      <hr />
      <p className="mb-0">
        Пожалуйста, выберите другой период.
      </p>
    </Alert>
  );
}
export default MatchesNotFound;
