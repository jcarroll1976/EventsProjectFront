import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Container>
      <Signup/>
      </Container>
    </div>
  );
}

export default App;
