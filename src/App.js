import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Competitions from './components/Competitions/Competitions';
import League from './components/Leagues/League';
import Layout from './components/Layout';


function App() {
  
  return (
    <Router>
      <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Competitions/>}/>
        <Route path="competitions" element={<Competitions/>}/>
        <Route path="competitions/:id" element={<League/>}/>
        <Route path ="Teams" element={<h1>Teams</h1>}/>
        <Route path = "*" element={<h1>Not foud</h1>}/>
      </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
