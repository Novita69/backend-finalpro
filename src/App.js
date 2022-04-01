// Head for import libary
import styled from 'styled-components';
import { Routes, Route, useLocation, Navigate, BrowserRouter } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Homefood from './components/Homefood';
// import React from 'react';
// import './App.css';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/Registerpage' element={<Registerpage/>} />
        <Route path='/Home' element={<Homefood/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
