import './PageItems.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import noImageAvailable from '../../img/noImageAvailable.svg';

const XS = 2; // число столбцов для страницы команд <576px
const SM = 3; // ≥576px
const MD = 3; // ≥768px
const LG = 4;//  ≥992px

function PageItems({
  page,
  itemsPerPage,
  currentPage,
  path,
}) {
  const lastItemsPage = currentPage * itemsPerPage;
  const firstItemsPage = lastItemsPage - itemsPerPage;

  const currentItemsPage = (page.slice(firstItemsPage, lastItemsPage)).length === 0
    ? page.slice(0, itemsPerPage)
    : page.slice(firstItemsPage, lastItemsPage);

  return (
    <div className="commonContainer">
      <Row xs={XS} sm={SM} md={MD} lg={LG} className="g-4">
        {
      currentItemsPage.map((item) => (
        <Col>
          <Card>
            <Link to={`/${path}/${item.id}?${item.name}`}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                {path === 'teams'
                  ? <Card.Img variant="bottom" src={item.crestUrl} className="teamImage" />
                  : (
                    <div>
                      <Card.Text>{item.area.name}</Card.Text>
                      <Card.Img variant="bottom" src={((item.area.ensignUrl) || (item.emblemUrl) || noImageAvailable)} height="100px" />
                    </div>
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
