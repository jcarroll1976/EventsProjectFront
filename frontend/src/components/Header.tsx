import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className = "Header">
            <h1>THE EVENT FINDER!!!!!</h1>
            <Link to={`/Favorites`}>
                <button>Favorites</button>
            </Link>
        </div>
    )
}