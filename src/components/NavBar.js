import React from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mr. Mate</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Mates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Termos</a>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </nav>
    );
};

export default NavBar;