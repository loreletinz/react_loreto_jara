import React from 'react';
import "./itemdetail.css";


const ItemDetail = (props) => {

	return (    
		<div className="ProductoDetalle-detalle">
            <section className="main-container-detalle">
                <div className="card-container-detalle">
                    <div className="product-card-detalle">
                        <img src={props.imagen} alt="" />
                        <div className="product-info-detalle">
                            <div>
                                <p>{props.precio}</p>
                                <p>{props.nombre}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="descripcionDetalle">{props.detalle}</div>
            </section>
		</div>
	);
}

export default ItemDetail;