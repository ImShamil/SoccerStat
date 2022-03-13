import './PageItems.css';
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
  let sm;
  let md;
  let lg;

  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;

  if (path === 'teams') {
    sm = 2; // число столбцов для страницы команд ≥576px
    md = 2; // ≥768px
    lg = 5;//  ≥992px
  } else {
    sm = 3; // тоже самое для страницы лиг
    md = 3;
    lg = 3;
  }
  const currentItemsPage = (page.slice(firstItemsPage, lastItemsPage)).length === 0
    ? page.slice(0, itemsPerPage)
    : page.slice(firstItemsPage, lastItemsPage);

  return (
    <div className={(path === 'competitions') ? 'competitionContainer' : 'teamContainer'}>
      <Row sm={sm} md={md} lg={lg} className="g-4">
        {
      currentItemsPage.map((item) => (
        <Col>
          <Card>
            <Link to={`/${path}/${item.id}?${item.name}`}>
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
    </div>

  );
}
export default PageItems;
