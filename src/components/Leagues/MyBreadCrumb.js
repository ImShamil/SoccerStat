import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link} from 'react-router-dom'

 function MyBreadCrumb({id,name}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item  href="#"><Link to = "/competitions">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item href="#"><Link to = {`/competitions/${id}`}>{name}</Link></Breadcrumb.Item>
    </Breadcrumb>
  )
}
export default MyBreadCrumb;