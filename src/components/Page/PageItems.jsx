import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import noImageAvailable from '../../img/noImageAvailable.svg';

function PageItems({
  page,
  itemsPerPage,
  currentPage,
  path,
}) {
  let xs;
  let md;

  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;

  if (path === 'teams') {
    xs = 2; // число столбцов <576px
    md = 5; // число столбцов for ≥768px
  } else {
    xs = 3; // тоже самое для страницы лиг
    md = 3; // тоже самое для страницы лиг
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
                  : (
                    <Card.Text>
                      <Card.Text>{item.area.name}</Card.Text>
                      <Card.Img variant="bottom" src={((item.area.ensignUrl) || (item.emblemUrl) || noImageAvailable)} height="100px" />
                    </Card.Text>
                  )}
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
