import React, {useState} from "react";
import Item from "./ItemCount/itemcount";

const ItemListContainer = ({props})=> {
    var cart = 0;
    const onAdd = (items, itemTitle) => {
		cart = cart + items;	
	};   
    return (
        <Item itemStock={5} initial={1} onAdd={onAdd}/>
        
    ); 
}

export default ItemListContainer; 