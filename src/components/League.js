import React,{useState,useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import MyTable from './MyTable'

 function League() {

  let id=useParams();

  const [data, setData]=useState([]);
  const [competition,setCompetition]=useState([]);
  const [loading ,setLoading]=useState(false);
  const [err ,setErr]=useState(false);

  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${id.id}/matches`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      
      console.log(response)
      setData(response);
      if('competition' in response){
        console.log(response.competition)
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

  useEffect(()=>{getData()},[competition.id]);
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

    <h2>Матчи</h2>
    <MyTable/>
  </div>
  )
}
export default League