import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Count/count.css';
import "./item.css"

export default function Item(props) {
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
            </section>
        </>
    );
}

export {Item};