import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";
import Container from "./components/Container/Container";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {

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
