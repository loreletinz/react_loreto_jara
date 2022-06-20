import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemdetail/ItemDetail';
import './itemdetailcontainer.css'
import { useParams } from 'react-router-dom';
import db from '../../db/db';

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState([]);
    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(db.find( item => item.id === Number(id) ))
        }, 2000);
    });
    useEffect(() => {
        getItem
            .then(res => { setItem(res) })
            .catch(err => { console.log(err) })
    }, [id])
    return (
        <div className="detalle">
            <div className="ItemDetail">
                <ItemDetail
                    nombre={item.nombre}
                    imagen={item.imagen}
                    precio={item.precio}
                    detalle={item.detalle}
                    stock={item.stock}
                    inicial={item.inicial}
                />
            </div>
        </div>
    );
}

export default ItemDetailContainer;