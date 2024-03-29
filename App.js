import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/' exact element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

