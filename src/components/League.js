import "react-datepicker/dist/react-datepicker.css";
import React,{useState,useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import MyTable from './MyTable'
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale/";
import { format } from 'date-fns'
import MyPagination from "./MyPagination";

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


  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      if('competition' in response){
        setCompetition(response.competition)
        // setMatches(response.matches)
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
 
  useEffect(()=>{getData()},[competition.id,startDate,finishDate]);
  useEffect(()=>{setMatches(data.matches)},[data]);
  const paginate=pageNumber=>setCurrentPage(pageNumber);
  const currentCompetitionPage= (matches.slice(firstCompetitionPage,lastCompetitionPage)).length===0? matches.slice(0,competitionsPerPage):matches.slice(firstCompetitionPage,lastCompetitionPage)
 
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
    <Breadcrumb>
      <Breadcrumb.Item  href="#"><Link to = "/competitions">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item href="#"><Link to = {`/competitions/${competition.id}`}>{competition.name}</Link></Breadcrumb.Item>
    </Breadcrumb>
    <div>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} locale={ ru } dateFormat="P"/>
      <DatePicker selected={finishDate} onChange={(date) => setFinishDate(date)} locale={ ru } dateFormat="P" />
    </div>
    <h2>Матчи</h2>
    <MyTable matches={currentCompetitionPage} />
    <MyPagination perPage={competitionsPerPage}total={matches.length} currentPage={currentPage}paginate={paginate}/>
  </div>
  )
}
export default League