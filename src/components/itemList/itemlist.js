import React from 'react';
import Item from '../item/Item.js';
import Count from '../Count/Count';
import './itemlist.css';

const ItemList = (props) => {
    return(
        <div  className="ProductList">
            {props.loading ? (
                <div className="lds-heart"><div></div></div>
            ) : (
            <>
                {props.productos.map((producto) => (
                    <div item="true" key={producto.id}>   
                        <Item   
                            id={producto.id}
                            nombre={producto.nombre}
                            img={producto.imagen}
                            precio={producto.precio}
                        />  
                        <Count 
                            stock={producto.stock}
                            inicial={producto.inicial}
                            item={producto}
                        />
                    </div>
                ))}
            </>
            )}
        </div>
    );
}

export default ItemList;