import React from 'react';
import './Nav.css'

const Nav = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark text-white fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/Nave">Only Fish Item Ailable</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item s">
                                <a className="nav" href="/link">Fried</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav" href="/link">Burger</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav" href="/link">Shop</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                id='input'
                                className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;