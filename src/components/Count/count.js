import React, { useState } from "react";
import './count.css';

export default function Count(props) {
	const [itemCount, setCount] = useState(props.inicial);
    function SumarItem() {
		setCount(itemCount + 1);
	}
    function RestarItem(){
        setCount(itemCount - 1);
    }
    return (
        <>
            <div className="contadores">
                <div className="botones">
                    <button disabled={props.inicial > itemCount -1} onClick={RestarItem}>-</button>
                    <button  disabled={props.stock - 1 < itemCount} onClick={SumarItem}>+</button>
                    <figure>
                        <img className="carrito" src="./../images/carrito.png" alt="" />
                        <span className="badge">{itemCount}</span>
                    </figure>
                </div>
                <div className="contenedor-boton">
                    <button className="agregar"> Agregar al carrito</button>
                </div>  
            </div> 
        </>
    )
}

export {Count} ;