
import './App.css';
//import React, { useEffect, useState } from 'react';
import Competitions from './components/Competitions/Competitions';


function App() {
  
  return (
    <div className="App">
      <header className='App-header'>
      <button><img alt='pic'></img></button>
      <button>Лиги</button>
      <button>Команды</button>
      </header>
      <Competitions/>
      </div>
  );
}

export default App;
