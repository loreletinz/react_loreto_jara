import React from "react";
import './cartwidget.css';
import { CarritoContext } from "../../../context/Context";
import { CheckoutCarrito } from "../../checkoutcarrito/CheckoutCarrito";

const CartWidget = (props) => {
    const { 
        totalInCart,
        openCheckoutCarrito,
        setOpenCheckoutCarrito
    }= React.useContext(CarritoContext);
    const onClickButton = () => {
        setOpenCheckoutCarrito(true)
    }
    return(
        <>
            <a onClick={() => onClickButton()}>
                <img className="carrito" src="./../images/carrito.png" />
                <span className="badge menu_compras" >{totalInCart()}</span>
                {!! openCheckoutCarrito &&(
                    <CheckoutCarrito setOpenCheckoutCarrito={setOpenCheckoutCarrito} />
                )} 
            </a>
            
        </>
        
    )
}

export default CartWidget; 