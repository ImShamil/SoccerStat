/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function ErrorPage({ data }) {
  return (
    <div>
      <h1>
        Error
        {data.errorCode}
      </h1>
      <p>{data.message}</p>
    </div>
  );
}

export default ErrorPage;
