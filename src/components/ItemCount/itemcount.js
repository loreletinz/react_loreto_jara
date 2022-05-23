import React, { useState } from "react";
import './itemcount.css';

export default function ItemCount(props) {
	const [itemCount, setItemCount] = useState(props.inicial);
    function SumarItem() {
		setItemCount(itemCount + 1);
	}
    function RestarItem(){
        setItemCount(itemCount - 1);
    }
    return (
        <>
            <div className="contadores">
                <figure>
                    <img className="carrito" src="./carrito.png" alt="" />
                    <span className="badge">{itemCount}</span>
                </figure>
                <div className="botones">
                    <button disabled={props.inicial > itemCount -1} onClick={RestarItem}>-</button>
                    <button  disabled={props.stock - 1 < itemCount} onClick={SumarItem}>+</button>
                </div>
                <div className="contenedor-boton">
                    <button className="agregar"> Agregar al carrito</button>
                </div>  
            </div> 
        </>
    )
}

export {ItemCount} ;