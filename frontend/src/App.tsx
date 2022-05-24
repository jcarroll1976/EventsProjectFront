import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap'
import Details from './components/Details';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element = {<Homepage />} />
         <Route path='/Signup/' element = {<Signup/>} />
        <Route path='/details' element = {<Details/>}/>
        <Route path = "*" element={<Navigate to = "/"/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
