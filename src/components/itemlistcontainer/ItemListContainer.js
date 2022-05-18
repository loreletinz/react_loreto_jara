import React , { useState, useEffect } from "react";
import ItemList from "./ItemCount/itemlist";

const ItemListContainer = (props)=> {
    var cart = 0;
    const onAdd = (items, itemTitle) => {
		cart = cart + items;	
	};
    const [productos, setProductos] = useState([]); 
    useEffect (() => {
        setTimeout(() => {
            const db = [
            {
                nombre: "Sopita de Brócoli",
                imagen: "./brocoli.jpg",
                stock: 5,
                inicial: 1,
                precio:"$280"
            },
            {
                nombre: "Sopita de Verduras",
                imagen: "./verduritas.jpg",
                stock: 5,
                inicial: 1,
                precio:"$260"
            },
            {
                nombre: "Sopita de Tomate",
                imagen: "./tomate.jpg",
                stock: 5,
                inicial: 1,
                precio:"$290"

            },
            {
                nombre: "Sopita de Lentejas",
                imagen: "./lentejas.jpg",
                stock: 5,
                inicial: 1,
                precio:"$230"
            },
            {
                nombre: "Sopita con Carne",
                imagen: "./carne.jpg",
                stock: 5,
                inicial: 1,
                precio:"$300"
            }
            ]
            setProductos(db);
        }, 3000);
    }, []); 

    return (
        <ItemList productos={productos} onAdd={onAdd} />
        
    ); 
}

export default ItemListContainer;