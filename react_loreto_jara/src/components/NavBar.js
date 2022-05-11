import React from "react";
import './navbar.css';

const NavBar = () => { 
    return(
        <nav>
            <div className="menu-izquierda">
                <ul>
                    <li>
                        <a href="#">Sopitas</a>
                    </li>
                    <li>
                        <a href="#">Arma tu Sopita</a>
                    </li>
                    <li>
                        <a href="#"><img src="./icon.png" /></a>
                    </li>
                    <li>
                        <a href="#">Zonas de Entrega</a>
                    </li>
                    <li>
                        <a href="#">Preguntas Frecuentes</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;  