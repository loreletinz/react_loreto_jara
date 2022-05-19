import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import './App.css';

function App() {
    return( 
        <>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="*" element={<h1>Error 404</h1>} ></Route >
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
        