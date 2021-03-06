import React, { useEffect, useState } from "react";
import './count.css';
import { CarritoContext } from "../../context/Context";

export default function Count({stock, inicial, onAdd, item}) {
    const { 
        agregarAlCarrito
    }= React.useContext(CarritoContext);
	const [itemCount, setCount] = useState(0);
    function SumarItem() {
		setCount(itemCount + 1);
	}
    function RestarItem(){
        setCount(itemCount - 1);
    }
    useEffect(() =>{
        setCount(inicial)
        
    }, [inicial])

    return (
        <>
            <div className="contadores">
                <div className="botones">
                    <button disabled={inicial > itemCount -1} onClick={() =>RestarItem()}>-</button>
                    <button  disabled={stock - 1 < itemCount} onClick={() =>SumarItem()}>+</button>
                    <figure>
                        <img className="carrito" src="./../images/carrito.png" alt="" />
                        <span className="badge">{itemCount}</span>
                    </figure>
                </div>
                <div className="contenedor-boton">
                    <button className="agregar" onClick={() =>agregarAlCarrito(item, itemCount)}> Agregar al carrito</button>
                </div>  
            </div> 
        </>
    )
}

