import React from "react";
import CartWidget from "./cartwidget/CartWidget";
import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
    const categorias = [{ nombre: 'Vegana', categoria: 'vegana' }, { nombre: 'No Vegana', categoria: 'novegana' }] /* ['Sopitas', 'vegana', 'novegana'] */;
    return (
        <>
            <nav>
                <ul>
                    <Link to={`/`}>
                        <img src="./../images/icon.png" />
                    </Link>
                    <Link to={`/`}>
                        <li>Sopitas</li>
                    </Link>
                    {categorias.map((item, i) => <Link key={i} to={`/categoria/${item.categoria}`}><li>{item.nombre}</li></Link>)}
                    <CartWidget />
                </ul>
            </nav>
        </>
    );
};

export default NavBar;  