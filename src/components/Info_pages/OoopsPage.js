/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function OoopsPage() {
  return (
    <Alert variant="info">
      <Alert.Heading>Упс! Что-то пошло не так!</Alert.Heading>
      <p>
        Похоже, ничего не нашлось или такой страницы не существует!
      </p>
      <hr />
      <p className="mb-0">
        Попробуйте поискать что-нибудь другое или перейдите на другую страницу 	&#128522;
      </p>
    </Alert>
  );
}
export default OoopsPage;
