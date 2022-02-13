import React from 'react'

const Pagination = ({competitionsPerPage,totalCompetitions,paginate,currentPage})=> {
    const pageNumbers=[];
    for (let i=1;i<=Math.ceil(totalCompetitions/competitionsPerPage);i++){
        pageNumbers.push(i);
    }

    
  return (
    <div>
        <ul className='page-item'>
            {
                pageNumbers.map(number=>(
                    
                    <li  key={number} className={number===currentPage? "page-active":"page-number"} onClick={()=>paginate(number)}>
                        <a href='#'>{number}</a>
                    </li>))
            }
        </ul>
    </div>
  )
}
export default Pagination;