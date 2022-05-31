import React, { useState, useEffect } from "react";
import ItemList from './../itemList/ItemList';
import db from "../../db/db";
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
    const { id } = useParams()
    const [productos, setProductos] = useState([]);
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(db.filter(item => item.categoria === id))    
            } else {
                resolve(db);
            }

        }, 2000);
    });
    useEffect(() => {
        getItem.then(res => { setProductos(res) }).catch(err => { console.log(err) })
    }, [id])

    return (
        <>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;   