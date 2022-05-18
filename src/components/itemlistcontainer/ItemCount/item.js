import React, { useState } from "react";
import './itemcount.css';

export default function Item(props) {
	const [itemCount, setItemCount] = useState(props.inicial);
    function SumarItem() {
		setItemCount(itemCount + 1);
	}
    function RestarItem(){
        setItemCount(itemCount - 1);
    }
    console.log(props.nombre)
    return (
        <>
            <section className="main-container">
                <div className="card-container">
                    <div className="product-card">
                        <img src={props.img} alt="" />
                        <div className="product-info">
                            <div>
                                <p>{props.precio}</p>
                                <p>{props.nombre}</p>
                            </div>
                            <figure>
                                <img className="carrito" src="./carrito.png" alt="" />
                                <span className="badge">{itemCount}</span>
                            </figure>
                        </div>
                        <div className="botones">
                            <button disabled={props.inicial > itemCount -1} onClick={RestarItem}>-</button>
                            <button  disabled={props.stock - 1 < itemCount} onClick={SumarItem}>+</button>
                        </div>
                        <div className="contenedor-boton">
                            <button className="agregar"> Agregar al carrito</button>
                        </div>    
                    </div>
                </div>
            </section>
        </>
    );
}

export {Item};