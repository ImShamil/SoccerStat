
import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'

import MyTable from '../Leagues/MyTable'

import { format } from 'date-fns'
import MyPagination from "../MyPagination";
import MyBreadCrumb from "./MyBreadCrumb";
import DateFilter from './DateFilter';

 function League() {

  let id=useParams();
  const [data, setData]=useState([]);
  const [competition,setCompetition]=useState([]);
  const [matches,setMatches]=useState([])
  const [loading ,setLoading]=useState(false);
  const [err ,setErr]=useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [competitionsPerPage]= useState(7)
  const [currentPage, setCurrentPage]=useState(1);
  const lastCompetitionPage=currentPage*competitionsPerPage;
  const firstCompetitionPage=lastCompetitionPage-competitionsPerPage;
  const currentCompetitionPage= (matches.slice(firstCompetitionPage,lastCompetitionPage)).length===0? matches.slice(0,competitionsPerPage):matches.slice(firstCompetitionPage,lastCompetitionPage)


  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      if('matches' in response){
        setCompetition(response.competition)
        setMatches(response.matches)
      }else setErr(true);
    })
    .catch(error=>{
      alert("Лига недоступна")
      if(error===403){
        console.log(error)
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  }
 console.log(data.matches)

  useEffect(()=>{getData()},[competition.id,startDate,finishDate]);

  const paginate=pageNumber=>setCurrentPage(pageNumber);

  if(err){
    return (<div>
            <h1>Error {data.errorCode}</h1>
            <p>{data.message}</p>
    </div>)
  }
  if (loading){
    return<h2>Loading...</h2>
}
  return (
  <div>
    <MyBreadCrumb id={competition.id} name={competition.name} />
    <DateFilter startDate={startDate} finishDate={finishDate} setStartDate={setStartDate} setFinishDate={setFinishDate} setCurrentPage={setCurrentPage} />
    <h2>Матчи</h2>
    <MyTable matches={currentCompetitionPage} />
    <MyPagination perPage={competitionsPerPage}total={matches.length} currentPage={currentPage}paginate={paginate}/>
  </div>
  )
}
export default League