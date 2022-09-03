import React from 'react';
import logob from '../../assets/img/logob.svg';

const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand col-3" href="#">
                        <img className=""src={logob} alt="logo"/>
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav col-xl-9">
                        <ul className="navbar-nav col-sm-12">
                            <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contacto</a>
                            </li>
                            <li className="nav-item d-none d-md-block ">
                            <a className="nav-link disabled text-black-70">CallVet <i className="fa-solid fa-phone"></i></a>
                            </li>
                            <li className="nav-item d-block d-sm-block d-md-none ">
                            <a href="tel:1164116862;" className="nav-link text-light">CallVet <i className="fa-solid fa-phone"></i></a>
                            </li>  
                        </ul>
                    </div>
                </div>
                <a className="col-1 carroCompra" href="#">
                    <i className="fa-solid fa-cart-shopping"></i>
                </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;