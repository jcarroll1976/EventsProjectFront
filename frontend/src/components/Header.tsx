import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import { signInWithGoogle, signOut } from '../firebaseconfig';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import UserPreferenceForm from './UserPreferenceForm';

export default function Header() {
    const {user} = useContext(AuthContext)
    const [showPrefForm, setShowPrefForm] = useState(false);

    return (
        <div className = "Header">
            <div className="TitleHeader"><h1>THE EVENT FINDER!!!!!</h1></div>
            <div className="NavButtons">
                {user ?
                <span>
            <Link to={`/Login`}>
                <button id="singleNav">Main Menu</button>
            </Link>
            <Link to={`/Favorites`}>
                <button id="singleNav">Favorites</button>
            </Link>
            </span>:
            <span></span>}
            {user ?
             <button id="singleNav" onClick={signOut}>Sign out</button>:
            <button id="singleNav" onClick={signInWithGoogle}>Sign in with Google</button>}

            </div>
        </div>
    )
}