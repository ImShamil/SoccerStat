import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

 function League() {

  let competition=useParams();
  const [data, setData]=useState([]);
  const [loading ,setLoading]=useState(false);

  const getData= function(){
    setLoading(true);
    fetch(`http://api.football-data.org/v2/competitions/${competition.id}`,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      setLoading(false);
    })
  }
  useEffect(getData,[]);

 console.log(data)


  return (
    <p>{competition.id}</p>
  )
}
export default League