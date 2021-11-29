import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";
import Container from "./components/Container/Container";
import axios from "axios";

function App() {
    const instance = axios.create({
        baseURL: 'https://api.skilla.ru/mango'
    })
    instance.defaults.headers.common['Authorization'] = `Bearer qwerty123`
    const res =   instance.post(`/getList?2021-11-28&2021-11-28` ).then(res => res.data)
    console.log(res )

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
