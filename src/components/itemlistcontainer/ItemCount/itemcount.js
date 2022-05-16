import React, { useState } from "react";
import './itemcount.css';

export default function Item(props) {
	const [itemCount, setItemCount] = useState(props.initial);
    function SumarItem() {
		setItemCount(itemCount + 1);
	}
    function RestarItem(){
        setItemCount(itemCount - 1);
    }
    return (
        <>
            <section className="main-container">
                <div className="card-container">
                    <div className="product-card">
                        <img src="./brocoli.jpg" alt="" />
                        <div className="product-info">
                            <div>
                                <p>$250</p>
                                <p>Sopita de Brócoli</p>
                            </div>
                            <figure>
                                <img className="carrito" src="./carrito.png" alt="" />
                                <span className="badge">{itemCount}</span>
                            </figure>
                        </div>
                        <div className="botones">
                            <button disabled={props.initial > itemCount -1} onClick={RestarItem}>-</button>
                            <button  disabled={props.itemStock - 1 < itemCount} onClick={SumarItem}>+</button>
                        </div>
                        <button className="agregar"> Agregar al carrito</button>    
                    </div>
                </div>
            </section>
        </>
    );
}

export {Item};