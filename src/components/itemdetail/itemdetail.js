import React from 'react';
import "./itemdetail.css";
import Count from '../Count/Count';


const ItemDetail = (props) => {
    let itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
    }

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
                <Count
                    stock={props.stock}
                    inicial={props.inicial}
                    onAdd={onAdd}
                />
            </section>
		</div>
	);
}

export default ItemDetail;