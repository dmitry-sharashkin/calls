import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='appWrapper'>
          <Header/>
          <Container/>
      </div>
    </div>
  );
}

export default App;
