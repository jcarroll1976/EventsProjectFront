import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Login from './components/Login';


function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Login/>
      <Homepage/>
    </div>
  );
}

export default App;
