import React from 'react';
import ReactDOM from 'react-dom';
import './checkoutcarrito.css';
import { CarritoContext } from '../../context/Context';

function CheckoutCarrito(props){
    const { 
        carrito,
        item,
        totalCompra,
        eliminarCarrito,
        setOpenCheckoutCarrito
    }= React.useContext(CarritoContext);
    const cierre = () => {
        setOpenCheckoutCarrito(prevState => {
            return !prevState;
        })
    }
    return ReactDOM.createPortal(
        <div className='checkoutCarrito'>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Producto
                        </th>
                        <th>
                            Cantidad
                        </th>
                        <th>
                            Precio
                        </th>
                        <th>
                            Total
                        </th>
                    </tr>
                    {carrito.map((item) => (
                        <tr>    
                            <td key={item.id}>
                                {item.nombre}
                            </td>
                            <td>
                                {item.cantidad}
                            </td>
                            <td>
                                {item.precio}
                            </td>
                            <td>
                                {totalCompra()}
                            </td>
                            <td>
                            <button onClick={() => { eliminarCarrito(item.id) }}> Eliminar </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> 

            <form>
                <p>Dejanos tus datos para comunicarnos</p>
                <label>Nombre</label>
                <input placeholder="nombre" />
                <label>Email</label>
                <input placeholder="email" />
                <button type='submit'>Enviar</button>
            </form>
            <button onClick={() => cierre()} >Cerrar</button>        
        </div>,
        document.getElementById('CheckoutCarrito')
    );
}

export {CheckoutCarrito};