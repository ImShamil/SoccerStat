/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function ErrorPage({ data }) {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Error
        {' '}
        {data.errorCode}
      </Alert.Heading>
      <p>
        {data.message}
      </p>
      <hr />
      <p className="mb-0">
        Ресурс, который вы ищете, ограничен.
        Пожалуйста, передайте действительный токен API и
        проверьте свою подписку на наличие разрешения.
      </p>
    </Alert>
  );
}

export default ErrorPage;
