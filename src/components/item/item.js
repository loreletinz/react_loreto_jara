import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css"
import Count from "../Count/Count";

export default function Item(props) {
    let itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
    }
    return (
        <>
        
            <section className="main-container">
                <div className="card-container">
                    <div className="product-card">
                        <Link  to={`/detalle/${props.id}`}><img src={props.img} alt="" /></Link>
                        <div className="product-info">
                            <div>
                                <p>{props.precio}</p>
                                <p>{props.nombre}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <Count 
                    stock={props.stock}
                    inicial={props.inicial}
                    onAdd={onAdd}
                />
            </section>
        </>
    );
}

