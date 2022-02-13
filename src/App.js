
import './App.css';
import React, { useEffect, useState } from 'react';
import Competition from './components/Competition';
import Pagination from './components/Pagination';


function App() {
  const [data, setData]=useState([]);
  const[competitions,setCompetitions]=useState([])
  const [loading ,setLoading]=useState(false);
  const [currentPage, setCurrentPage]=useState(1);
  const [competitionsPerPage]= useState(9);

  const getData= function(){
    setLoading(true);
    fetch('http://api.football-data.org/v2/competitions/',{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
    .then((response) => response.json())
    .then((response) =>{
      setData(response);
      setCompetitions(response.competitions)
      setLoading(false);
    })
  }
  useEffect(getData,[]);
  const lastCompetitionPage=currentPage*competitionsPerPage;
  const firstCompetitionPage=lastCompetitionPage-competitionsPerPage;
  const currenCompetitionPage=competitions.slice(firstCompetitionPage,lastCompetitionPage)
  

  const paginate=pageNumber=>setCurrentPage(pageNumber);
  const nextPage=()=>setCurrentPage(prev=>prev+1);
  const prevPage=()=>setCurrentPage(prev=>prev-1);

  // console.log(competitions);
  

//   const [items, setItems]=useState([]);
//   const [count, setCount]=useState(0);

//   const getData= function(){
//     fetch('http://api.football-data.org/v2/competitions/',{ headers: { 'X-Auth-Token': 'a225ca7a0b074a6da24c00593375f51e' }})
//     .then((response) => response.json())
//     .then((response) =>{
//       const items=[];
//       const cout=response.count;
//       response.competitions.map((item,index)=>{ 
//         items.push([item.name,item.area.name] )
//       })
      
//       // console.log(items)
//       setItems(items);
//       setCount(cout);
//     })
//   }
//   useEffect(getData,[])
//   const competitions=items.map((val,index)=> <a href="#"><div key={index}  className='competition_item'>{val.map((item,index)=><p key={index}>{item}</p>)}</div></a>)
//   console.log(count);
  
  return (
    <div className="App">
{/* //       <header className="App-header">
//         <img alt="asdsd"></img>
//         <div>
//           <nav>
//             <a>Лиги</a>
//             <a>Команды</a>
//           </nav>
//         </div>
//       </header>
//       <div>Поиск</div>
//       <div className="competition">
//         {competitions}
//       </div>
//       <div>Пагинатор
        
//       </div> */}
        <Competition competitions={currenCompetitionPage} loading={loading}/>
        <Pagination competitionsPerPage={competitionsPerPage} totalCompetitions ={data.count} paginate={paginate}/>

        <button  onClick={prevPage}>PrevPage</button>
        <button onClick={nextPage}>NextPage</button>
      </div>
  );
}

export default App;
