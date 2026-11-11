import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="navbar">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/Fizet">Fizetés</NavLink>
            <NavLink to="/Szalit">Szállítás</NavLink>
        </nav>
    );
}
