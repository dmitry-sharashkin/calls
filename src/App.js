import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";
import Container from "./components/Container/Container";
import axios from "axios";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
    const instance = axios.create({
        baseURL: 'https://api.skilla.ru/mango'
    })
    instance.defaults.headers.common['Authorization'] = `Bearer qwerty123`
    //
    //
    // const res = instance.post(`/getList?2021-11-28&2021-11-28`).then(res => res.data)
    // console.log(res)

    const file = instance.post(`/getRecord?record=MToxMDA2NzYxNToxMjg5NDM2Mjg1Njow&partnership_id=136`).then(res=>res.data)
            // ? record=<id записи>
            // & partnership_id=<id партнера>)
    console.log(file)
    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar/>
                <div className='appWrapper'>
                    <Header/>
                    <Container/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
