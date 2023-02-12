import './App.css';
import React from 'react';
import Chart from './components/Chart';
import BarChart from './components/BarChart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Chart/>}/>
        <Route path='/BarChart' element={<BarChart/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
