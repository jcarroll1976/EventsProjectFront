import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap'
import Details from './components/Details';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element = {<Homepage />} />
         <Route path='/Signup/' element = {<Signup/>} />
        <Route path='/Details/:id' element = {<Details/>}/>
        <Route path = "*" element={<Navigate to = "/"/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
