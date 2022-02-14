import React from 'react'

const Pagination = ({competitionsPerPage,totalCompetitions,paginate,currentPage})=> {
    const pageNumbers=[];
    for (let i=1;i<=Math.ceil(totalCompetitions/competitionsPerPage);i++){
        pageNumbers.push(i);
    }
    function prevPage() {
        paginate(pageNumber => pageNumber === 1 ? 1 : pageNumber - 1)
    }
    
    function nextPage() {
      paginate(pageNumber =>
          pageNumber === Math.ceil(totalCompetitions / competitionsPerPage) ?
              pageNumber : pageNumber + 1)
    }
  return (
    <nav>
        <ul class="pagination">
            {
                pageNumbers.map(number=>(
                    
                    <li  key={number}  class={number===currentPage? "page-item active":"page-item disabled"} onClick={()=>paginate(number)}>
                        <a  class="page-link" href='#'>{number}</a>
                    </li>))
            }
        </ul>
        <button class="page-item"  onClick={prevPage}>PrevPage</button>
        <button class="page-item" onClick={nextPage}>NextPage</button>
    </nav>
  )
}
export default Pagination;