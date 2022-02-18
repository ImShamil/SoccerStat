import React,{useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination'

const MyPagination = ({competitionsPerPage,totalCompetitions,currentPage,paginate})=> {
  let active = currentPage;
  const totalPages=Math.ceil(totalCompetitions/competitionsPerPage)
  console.log(totalPages)
  console.log(currentPage)
  const firstPage=1;
  let items = [];
  const ellips=<Pagination.Ellipsis/>;
 
 
    for(let i=firstPage;i<=totalPages;i++){
      if((i===firstPage) || (i===currentPage-1)|| (i<currentPage+4)||(i===totalPages)){
        items.push(
        <Pagination.Item key={i} active={i === active}  onClick={()=>paginate(i)}>
            {i}
        </Pagination.Item>)
      } 
      else{
        i=totalPages-1
        items.push(<Pagination.Ellipsis/>)
      }
      if((i<currentPage) &&  (i>firstPage+1)) {
        items.splice(firstPage,2,<Pagination.Ellipsis/>)
      }
      
    }

    
   

    return(
    <Pagination className="pagination justify-content-center"> 
        <Pagination.Prev  onClick={()=>paginate(pageNumber => pageNumber === 1 ? 1 : pageNumber - 1)}/>
        {items}
        <Pagination.Next  onClick={()=>paginate(pageNumber =>
          pageNumber === Math.ceil(totalCompetitions / competitionsPerPage) ?
              pageNumber : pageNumber + 1)}  />
    </Pagination>
    
    
    )
}
export default MyPagination;