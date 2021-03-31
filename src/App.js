import './App.css';
import  NewsContainer from './components/Home';
import Dropdown from './components/Dropdown';
import 'react-bootstrap';
import React, { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Dropdown></Dropdown>
      < NewsContainer></ NewsContainer>
    </div>
  );
}

export default App;
