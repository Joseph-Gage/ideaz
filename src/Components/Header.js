import React from 'react'
import '../Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <a className="navbar-brand" href="#">Ideaz</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sign-up">Sign in</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;
