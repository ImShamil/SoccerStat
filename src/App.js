/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Page from './components/PageItems/Page';
import ItemMatches from './components/Matches/ItemMatches';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="competitions" />} />
          <Route path="competitions" element={<Page path="competitions" />} />
          <Route path="competitions/:id" element={<ItemMatches path="competitions" />} />
          <Route path="teams" element={<Page path="teams" />} />
          <Route path="teams/:id" element={<ItemMatches path="teams" />} />
          <Route path="*" element={<h1>Not foud</h1>} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
