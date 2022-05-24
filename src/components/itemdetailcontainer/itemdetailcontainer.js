import React, { useEffect, useState } from 'react';
import ItemDetail from './../itemdetail/itemdetail';
import './itemdetailcontainer.css'
import { useParams } from 'react-router-dom';
import db from '../../db/db';
import Count from '../Count/count';

const ItemDetailContainer = (props) => {
    const {id} = useParams ()
    const [item, setItem] = useState([]);
    const [stock, setStock] = useState([])
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db.find( item => item.id === Number(id) ))

        }, 2000);
    });
    useEffect(() => {
        getItem.then(res=>{setItem(res)}).catch(err=>{console.log(err)})
    })
    
    var itemsEnCarrito = 0;
	const onAdd = (items, itemTitle) => {
		itemsEnCarrito = itemsEnCarrito + items;
    }


	return(
        <div  className="detalle">
            <div className="ItemDetail">
                <ItemDetail
                    nombre={item.nombre}
                    imagen={item.imagen}
                    precio={item.precio}
                    detalle={item.detalle}
                />  
                <Count 
                    stock={props.stock}
                    inicial={props.inicial}
                    onAdd={onAdd}
                />
            </div>
        </div>
    );
}

export default ItemDetailContainer;