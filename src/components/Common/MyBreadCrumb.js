/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function MyBreadCrumb({
  path,
  name,
}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">
        <Link to={`/${path}`}>
          {path === 'teams' ? 'Команды' : 'Лиги'}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {name.replace('?', '').replaceAll('%20', ' ')}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default MyBreadCrumb;
