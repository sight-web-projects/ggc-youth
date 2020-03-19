import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contatct us</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>

            </nav>
        </div>
    );
}

export default Navigation;