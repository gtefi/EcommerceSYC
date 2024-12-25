import React from 'react';
import CartWidget from './CartWidget';
// Creando NavBAr
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <a className="navbar-brand" href="#">SYC</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#hombres">Hombres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#mujeres">Mujeres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#ofertas">Ofertas</a>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
