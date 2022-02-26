import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';


 function PageItems({page, firstItemsPage,lastItemsPage,itemsPerPage,path}) {

  const currentItemsPage= (page.slice(firstItemsPage,lastItemsPage)).length===0? page.slice(0,itemsPerPage):page.slice(firstItemsPage,lastItemsPage)
  return (
    <CardGroup style={{ display: 'flex' }}>
          {
            currentItemsPage.map((item,i)=>(
              <Card border="dark" style={{ width: '20px' }}> 
                <Link key={i} to={`/${path}/${item.id}`}>
                  <Card.Body class="card" key={i}>
                    <Card.Text>{item.name}</Card.Text>
                    {path==="teams"?<Card.Img variant="bottom" src={item.crestUrl}/>:<Card.Text>{item.area.name}</Card.Text>}
                  </Card.Body> 
                </Link>
              </Card>
            ))
          }
    </CardGroup>
  )
}
export default PageItems;