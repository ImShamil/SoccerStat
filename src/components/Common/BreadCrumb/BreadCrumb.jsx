import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function BreadCrumb({
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
export default BreadCrumb;
