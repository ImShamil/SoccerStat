import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';


 function PageItems({page, firstItemsPage,lastItemsPage,itemsPerPage,path}) {
  let xs,md;
  if (path==="teams"){
    xs=2;
    md=5;
  }else {
    xs=3;
    md=3;
  }
  const currentItemsPage= (page.slice(firstItemsPage,lastItemsPage)).length===0? page.slice(0,itemsPerPage):page.slice(firstItemsPage,lastItemsPage)
  return (
  
   <Row xs={xs} md={md} className="g-4">
    {
      currentItemsPage.map((item,i)=>(
       <Col>
        <Card > 
          <Link key={i} to={`/${path}/${item.id}`}>
            <Card.Body  key={i}>
              <Card.Title>{item.name}</Card.Title>
              {path==="teams"?<Card.Img variant="bottom" src={item.crestUrl}  height="100px"/>:<Card.Text>{item.area.name}</Card.Text>}
            </Card.Body> 
          </Link>
        </Card>
       </Col>
      ))
    }
</Row>





   
  )
}
export default PageItems;