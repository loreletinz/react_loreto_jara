import React from "react";
import CartWidget from "./cartwidget/CartWidget";
import './navbar.css';

const NavBar = () => { 
    const categorias = ['Sopitas', 'Arma tu Sopita', 'Zonas de Entrega'];
    return(
        <>
            <nav>
                <ul>
                    <a href="#"><img src="./icon.png" /></a>
                    {categorias && categorias.map((item, i) => <li key={i}><a href="#">{item}</a></li>)}
                    <CartWidget />
                </ul>
            </nav>
        </>
    );
};

export default NavBar;  