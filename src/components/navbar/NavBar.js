import React from "react";
import CartWidget from "./cartwidget/CartWidget";
import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => { 
    const categorias = ['Sopitas', 'Arma tu Sopita', 'Zonas de Entrega'];
    return(
        <>
            <nav>
                <ul>
                    <Link to={`/`}>
                        <img src="./../images/icon.png" />
                    </Link>
                    {categorias && categorias.map((item, i) => <li key={i}><a href="#">{item}</a></li>)}
                    <CartWidget />
                </ul>
            </nav>
        </>
    );
};

export default NavBar;  