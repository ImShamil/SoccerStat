import React,{useState,useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

 function League() {

  let id=useParams();

  const [data, setData]=useState([]);
  const [competition,setCompetition]=useState([]);
  const [loading ,setLoading]=useState(false);

  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${id.id}/matches`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      setCompetition(response.competition)
      setLoading(false);
    })
  }
  console.log(competition.name)
  useEffect(getData,[competition.id]);
  
  // setNameLeague(data.competition)
  //console.log(nameLeague)
  return (
    <Breadcrumb>
     <Breadcrumb.Item  href="#"><Link to = "/competitions">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item href="#">
      {competition.name}
      </Breadcrumb.Item>
  </Breadcrumb>
  )
}
export default League