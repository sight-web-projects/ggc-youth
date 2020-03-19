import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-5 mb-4">
                <div>
                    <NavLink to="/" className="p-3">Home</NavLink>
                    <NavLink to="/contact" className="p-3">Contatct us</NavLink>
                    <NavLink to="/about" className="p-3">About</NavLink>
                    <NavLink to="/departments" className="p-3">Departments</NavLink>
                    <NavLink to="/leaders" className="p-3">Leaders</NavLink>

                </div>

            </nav>
        </div>
    );
}

export default Navigation;