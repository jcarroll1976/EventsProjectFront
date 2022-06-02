import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';

export default function Header() {

    return (
        <div className = "Header">
            <div className="titleheader"><h1>THE EVENT FINDER!!!!!</h1></div>
            <div className="navbuttons">
            <Link to={`/Favorites`}>
                <button>Favorites</button>
            </Link>
            <Link to={`/Login`}>
                <button>Main Menu</button>
            </Link>
            </div>
        </div>
    )
}