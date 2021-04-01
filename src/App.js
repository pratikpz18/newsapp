import './App.css';
import  NewsContainer from './components/NewsContainer';
import Dropdown from './components/Dropdown';
import 'react-bootstrap';
import React, { useState } from 'react';

function App() {
  const [category,setCategory]=useState('general');
  return (
    <div className="App">
      <Dropdown setCategory={setCategory}></Dropdown>
      <NewsContainer category={category}></ NewsContainer>
    </div>
  );
}

export default App;
