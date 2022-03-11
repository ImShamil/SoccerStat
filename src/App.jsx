import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Page from './components/Page/Page';
import MatchesPage from './components/Matches/MatchesPage';
import Layout from './components/Layout';
import OoopsPage from './components/Info_pages/OoopsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="competitions" />} />
          <Route path="competitions" element={<Page path="competitions" />} />
          <Route path="competitions/:id" element={<MatchesPage path="competitions" />} />
          <Route path="teams" element={<Page path="teams" />} />
          <Route path="teams/:id" element={<MatchesPage path="teams" />} />
          <Route path="*" element={<OoopsPage />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
