/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

function PageItems({
  page,
  firstItemsPage,
  lastItemsPage,
  itemsPerPage,
  path,
}) {
  let xs; let md;

  if (path === 'teams') {
    xs = 2;
    md = 5;
  } else {
    xs = 3;
    md = 3;
  }
  const currentItemsPage = (page.slice(firstItemsPage, lastItemsPage)).length === 0
    ? page.slice(0, itemsPerPage)
    : page.slice(firstItemsPage, lastItemsPage);
  return (

    <Row xs={xs} md={md} className="g-4">
      {
      currentItemsPage.map((item) => (
        <Col>
          <Card>
            <Link to={{ pathname: `/${path}/${item.id}?${item.name}` }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                {path === 'teams'
                  ? <Card.Img variant="bottom" src={item.crestUrl} height="100px" />
                  : <Card.Text>{item.area.name}</Card.Text>}
              </Card.Body>
            </Link>
          </Card>
        </Col>
      ))
    }
    </Row>

  );
}
export default PageItems;
