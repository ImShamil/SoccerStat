
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Competitions from './components/Competitions/Competitions';
import League from './components/League';


function App() {
  
  return (
    <Router>
      <div className="App">
      <header className='App-header'>
      <button><img alt='pic'></img></button>
      <button><Link to="/Competitions/*"> Лиги </Link> </button>
      <button><Link to="/Teams/"> Команды </Link> </button>
      </header>
      <Routes>
        <Route path="/Competitions/*" element={<Competitions/>}/>
        <Route path=":id" element={<League/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
