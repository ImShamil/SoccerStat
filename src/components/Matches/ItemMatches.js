import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import MyTable from './MyTable'
import { format } from 'date-fns'
import MyPagination from "../Common/MyPagination";
import MyBreadCrumb from "../Common/MyBreadCrumb";
import DateFilter from '../Common/DateFilter';
import Spinner from 'react-bootstrap/Spinner'

 function ItemMatches({path}) {

  let id=useParams();
  let URL_First='';
  let URL_Second='';
  const [dataFirst, setDataFirst]=useState([]);
  const [dataSecond,setDataSecond]=useState([]);
  const [item,setItem]=useState([]);
  const [matches,setMatches]=useState([])
  const [loading ,setLoading]=useState(false);
  const [err ,setErr]=useState(false);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [itemsPerPage]= useState(7)
  const [currentPage, setCurrentPage]=useState(1);
  const lastItemsPage=currentPage*itemsPerPage;
  const firstItemsPage=lastItemsPage-itemsPerPage;
  

  URL_First=`http://api.football-data.org/v2/${path}/${id.id}`
  const getTeams=function(){
    setLoading(true);
    fetch(URL_First,{ headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN }})
    .then((response) => response.json())
    .then((response) =>{
      setDataFirst(response);
      if('name' in response){
        setItem(response)
      }else setErr(true);
    })
    .catch(error=>{
      alert("Матчи недоступны")
      if(error===403){
        console.log(error)
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  }

  if((startDate===null)||(finishDate===null)){
    URL_Second=`http://api.football-data.org/v2/${path}/${id.id}/matches`
  }else URL_Second=`http://api.football-data.org/v2/${path}/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`

  const getData= function(){
    setLoading(true);
    fetch(URL_Second,{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setDataSecond(response);
      if('matches' in response){
        setMatches(response.matches)
      }else setErr(true);
    })
    .catch(error=>{
      alert("Матчи недоступны")
      if(error===403){
        console.log(error)
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  }
  useEffect(()=>{getTeams()},[id,path]);
  useEffect(()=>{getData()},[id,(startDate && finishDate),path]);

  const currentMathesPage= (matches.slice(firstItemsPage,lastItemsPage)).length===0? matches.slice(0,itemsPerPage):matches.slice(firstItemsPage,lastItemsPage);
  const paginate=pageNumber=>setCurrentPage(pageNumber);
  

  if(err){
    return (<div>
            <h1>Error {dataFirst.errorCode}</h1>
            <p>{dataFirst.message}</p>
    </div>)
  }
  if (loading||currentMathesPage.length===0 ){
    return(
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
          )
}
  return (
  <div>
    <MyBreadCrumb id={item.id} name={item.name} path={path} />
    <DateFilter startDate={startDate} finishDate={finishDate} setStartDate={setStartDate} setFinishDate={setFinishDate} setCurrentPage={setCurrentPage} />
    <h2>Матчи</h2>
    <MyTable matches={currentMathesPage} count={dataSecond.count} />
    <MyPagination perPage={itemsPerPage}total={dataSecond.count} currentPage={currentPage}paginate={paginate}/>
  </div>
  )
}
export default ItemMatches