import React , { useState, useEffect } from "react";
import ItemList from './../itemList/itemlist';
import db from "../../db/db";

const ItemListContainer = (props)=> {
    var cart = 0;
    const onAdd = (items, itemTitle) => {
		cart = cart + items;	
	};
    const [productos, setProductos] = useState([]); 
    useEffect (() => {
        setTimeout(() => {
            setProductos(db);
        }, 1000);
    }, []); 
    return (
        <>
            <ItemList productos={productos} onAdd={onAdd} />
        </>
    ); 
}

export default ItemListContainer;   