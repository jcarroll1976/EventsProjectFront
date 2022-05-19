import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
