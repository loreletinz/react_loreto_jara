import React from "react";
import CartWidget from "./CartWidget";
import './navbar.css';

const NavBar = () => { 
    const categorias = ['Sopitas', 'Arma tu Sopita', 'Zonas de Entrega'];
    return(
        <>
            <nav>
                <ul>
                    <a href="#"><img src="./icon.png" /></a>
                    {categorias.map(categoria => <li><a href="#">{categoria}</a></li>)}
                    <CartWidget />
                </ul>
            </nav>
        </>
    );
};

export default NavBar;  