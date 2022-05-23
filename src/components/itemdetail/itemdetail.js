import React from 'react';
import ItemCount from '../Count/count';
import "./itemdetail.css";

const ItemDetail = (props) => {
    var itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
    }
	return (
		<div className="ProductoDetalle">
            <section className="main-container">
                <div className="card-container">
                    <div className="product-card">
                        <img src='./brocoli.jpg' />
                        <div className="product-info">
                            <div>
                                <p>$280</p>
                                <p>Sopita de Brócoli</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="descripcionDetalle">Sopita hecha con los productos mas frescos sarasa sarasa bla bla bla etc etc que lindo sarasa sarasa</div>
            </section>
            <ItemCount />
		</div>
	);
}

export default ItemDetail;