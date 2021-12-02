import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";
import Container from "./components/Container/Container";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
//
//     const instance = axios.create({
//         baseURL: 'https://api.skilla.ru/mango'
//     })
//     const headers ={
//         'Authorization': 'Bearer qwerty123',
//         'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
//         'Content-Transfer-Encoding': 'binary',
//         'Content-Disposition': 'filename="record.mp3"'
//     }
//
//    const result =  instance.post(`/getRecord?record=MToxMDA2NzYxNToxMjg5NDM2Mjg1Njow&partnership_id=136`, null , {headers}).then(res => res)
// console.log(result)
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
