import React from "react";
import './cartwidget.css';

const CartWidget = () => {
    return(
        <a href="#">
            <img className="carrito" src="./carrito.png" />
            <span className="badge menu_compras">3</span>    
        </a>
    )
}

export default CartWidget; 