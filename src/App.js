import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import Footer from "./components/footer/Footer";
import './App.css';
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";
import Count from "./components/Count/Count";
import ItemList from "./components/itemList/ItemList";
import ItemDetail from "./components/itemdetail/ItemDetail";
import Item from "./components/item/Item";
import { CarritoContext, CarritoProvider } from "./context/Context";
import db from "./db/db";
import { CheckoutCarrito } from "./components/checkoutcarrito/CheckoutCarrito";

function App() {
    return (
        <>
            <CarritoProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />}></Route>
                        <Route 
                            path="/categoria/:id" 
                            element={
                                <ItemListContainer>
                                    <ItemList />
                                </ItemListContainer>
                            }>
                        </Route>
                        <Route 
                            path="/detalle/:id" 
                            element={
                                <ItemDetailContainer>
                                    <ItemDetail/>
                                </ItemDetailContainer>
                            }>
                        </Route>
                        <Route path="/*" element={<h1>Error 404</h1>} ></Route >
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CarritoProvider>
        </>
    )
}

export default App;
