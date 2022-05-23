import React from 'react';
import Item from './../item/item.js';
import ItemCount from '../Count/count';
import './itemlist.css';

const ItemList = (props) => {
	var itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
    }
    
    return(
        <div  className="ProductList">
        {props.productos.map((producto) => (
            <div item="true" key={producto.nombre}>   
                <Item 
                    nombre={producto.nombre}
                    img={producto.imagen}
                    precio={producto.precio}
                />  
                <ItemCount 
                    stock={producto.stock}
                    inicial={producto.inicial}
                    onAdd={onAdd}
                />
            </div>
        ))}
        </div>
    );
}

export default ItemList;