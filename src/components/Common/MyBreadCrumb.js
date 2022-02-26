import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link} from 'react-router-dom'

 function MyBreadCrumb({id,name,path}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item  href="#"><Link to = {`/${path}`}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item href="#"><Link to = {`/${path}/${id}`}>{name}</Link></Breadcrumb.Item>
    </Breadcrumb>
  )
}
export default MyBreadCrumb;