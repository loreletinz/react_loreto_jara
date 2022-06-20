import React, { useState, useEffect } from "react";
import ItemList from './../itemList/ItemList';
import { CarritoContext } from "../../context/Context";


const ItemListContainer = (props) => {
    const { 
        productos,
        loading
    }= React.useContext(CarritoContext);

    return (
        <>
            <ItemList productos={productos} loading={loading}/>
        </>
    );
}

export default ItemListContainer;   