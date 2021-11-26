import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='appWrapper'>
          <Header/>
      </div>
    </div>
  );
}

export default App;
