import React, {useState, useEffect} from "react";
import db from "../db/db";
import { useParams } from 'react-router-dom';

const CarritoContext = React.createContext();

function CarritoProvider(props){
    
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [openCheckoutCarrito, setOpenCheckoutCarrito] = useState(false)

    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    //FUnciones
    function isInCart(id) {
        return carrito.map(producto => producto.id).indexOf(id);
    }

    function agregarAlCarrito( item, cantidad) {
        let nuevoCarro = [];
        const {id} = item;
        const index = isInCart(id);
        if (index > -1) {
            nuevoCarro = carrito.map(producto => {
                console.log("cant", producto.cantidad);
                console.log(typeof producto.cantidad);
                if (producto.id === id) {
                    return {
                        ...producto,
                        cantidad: producto.cantidad + cantidad
                    }
                }
                return producto;
            })
        } else {
            nuevoCarro =
            [
                ...carrito,
                {
                    ...item,
                    cantidad
                }
            ];
        }
        setCarrito(nuevoCarro);
    }

    const eliminarCarrito = (id)=> {
        const newCart = carrito.filter(item => item.id !== id);
        setCarrito(newCart)
    }

    const totalInCart = ()=> {
        return carrito.reduce((acc, item)=>{
            return acc + item.cantidad
        }, 0)
    }
    const totalCompra = ()=> {
        return carrito.reduce((acc, item) => {
			return acc =  acc + item.precio * item.cantidad
		}, 0);
    }

    ///Fin funciones
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(db.filter(item => item.categoria === id))    
            } else {
                resolve(db);
            }
            setLoading(false)
        }, 1000);
    });
    useEffect(() => {
        getItem.then(res => { setProductos(res) }).catch(err => { console.log(err) })
    }, [id])

    
    return(
        <CarritoContext.Provider value={{
            id,
            productos,
            loading,
            carrito, 
            agregarAlCarrito,
            totalInCart,
            totalCompra,
            eliminarCarrito,
            openCheckoutCarrito,
            setOpenCheckoutCarrito
        }}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export {CarritoProvider, CarritoContext};
