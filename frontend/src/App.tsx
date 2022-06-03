import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Login from './components/Login';
import { Container } from 'react-bootstrap'
import Details from './components/Details';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FavoriteEvents from './components/FavoriteEvents';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <div className="headerdiv">
        <Header/>
        </div>
        <div >
        <Routes>
         <Route path='/Login/' element = {<Login/>} />
         <Route path='/Details/:id' element = {<Details/>}/>
         <Route path='/Favorites' element = {<FavoriteEvents/>}/>
        <Route path = "*" element={<Navigate to = "/Login"/>}/>
       </Routes>
       </div>
      </Router>
      
    </div>
  );
}

export default App;

