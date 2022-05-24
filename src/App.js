import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import Footer from "./components/footer/footer";
import './App.css';
import ItemDetailContainer from "./components/itemdetailcontainer/itemdetailcontainer";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/*" element={<h1>Error 404</h1>} ></Route >
                    <Route path="/" element={<NavBar />}></Route>
                    <Route path="/detalle/:id" element={<ItemDetailContainer />}></Route>
                    <Route path="/categoria/:id" element={<ItemListContainer />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
