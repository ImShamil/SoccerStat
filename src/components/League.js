import "react-datepicker/dist/react-datepicker.css";
import React,{useState,useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import MyTable from './MyTable'
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale/";
import { format } from 'date-fns'

 function League() {

  let id=useParams();

  const [data, setData]=useState([]);
  const [competition,setCompetition]=useState([]);
  const [matches,setMathces]=useState([])
  const [loading ,setLoading]=useState(false);
  const [err ,setErr]=useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
     
      if('competition' in response){
        setCompetition(response.competition)
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
  useEffect(()=>{ setMathces(data.matches)},[competition.id,startDate,finishDate]);
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
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} locale={ ru } dateFormat="P"/>
    <DatePicker selected={finishDate} onChange={(date) => setFinishDate(date)} locale={ ru } dateFormat="P" />
    <h2>Матчи</h2>
    <MyTable matches={matches} />
  </div>
  )
}
export default League