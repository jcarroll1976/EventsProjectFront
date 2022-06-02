import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import { signInWithGoogle, signOut } from '../firebaseconfig';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Header() {
    const {user} = useContext(AuthContext)
    return (
        <div className = "Header">
            <div className="titleheader"><h1>THE EVENT FINDER!!!!!</h1></div>
            <div className="navbuttons">
            <Link to={`/Login`}>
                <button>Main Menu</button>
            </Link>
            <Link to={`/Favorites`}>
                <button>Favorites</button>
            </Link>
            {user ?
             <button onClick={signOut}>Sign out</button>:
            <button onClick={signInWithGoogle}>Sign in with Google</button>}
            </div>
        </div>
    )
}