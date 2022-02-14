import React,{useState} from 'react'
import Pagination from './Pagination';

 function Competition({competitions,data}) {
    const [currentPage, setCurrentPage]=useState(1);
    const [competitionsPerPage]= useState(9);
    const lastCompetitionPage=currentPage*competitionsPerPage;
    const firstCompetitionPage=lastCompetitionPage-competitionsPerPage;
    const paginate=pageNumber=>setCurrentPage(pageNumber);

    const currentCompetitionPage=competitions.slice(firstCompetitionPage,lastCompetitionPage)
  return (
    <div>
         {
                currentCompetitionPage.map((competition,i)=>(
                    <button type="button" class="btn btn-secondary" key={i}>
                        <p>{competition?.name}</p>
                        <p>{competition?.area.name}</p>
                    </button>   
                ))
            }
            <Pagination competitionsPerPage={competitionsPerPage} totalCompetitions ={data.count} paginate={paginate} currentPage={currentPage}/>
    </div>
  )
}
export default Competition;