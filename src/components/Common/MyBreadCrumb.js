/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function MyBreadCrumb({ id, path, setErr }) {
  const URL = `http://api.football-data.org/v2/${path}/${id}`;
  const [name, setName] = useState([]);

  const getTeams = () => {
    fetch(URL, { headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN } })
      .then((response) => response.json())
      .then((response) => {
        if ('name' in response) {
          setName(response);
        } else setErr(true);
      })
      .catch((error) => {
        alert('Матчи недоступны');
        if (error === 403) {
          console.log(error);
        }
      });
  };
  useEffect(() => { getTeams(); }, [id, path]);

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">
        <Link to={`/${path}`}>
          Home
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <Link to={`/${path}/${id}`}>
          {name.name}
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default MyBreadCrumb;
