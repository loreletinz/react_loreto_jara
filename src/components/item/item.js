import React, { useState } from "react";
import './../ItemCount/itemcount.css';

export default function Item(props) {
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
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
}

export {Item};