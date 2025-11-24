import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login1'
import Signup from './components/Signup';
import BusSelection from './components/BusSelection';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bus-selection" element={<BusSelection />} />    
      </Routes>
    </Router>
  );
}

export default App;
