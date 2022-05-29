import React, {useContext} from 'react'
import { signInWithGoogle, signOut } from "../firebaseconfig";
import Homepage from './Homepage';
import {useParams} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import "./Login.css";
import background from "../pexels-maegan-neufeld-342411.jpg"

export default function Login() {
    const {user} = useContext(AuthContext)

   const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5
    };

    return (
        <div className = "LoginComponent" style={myStyle}>
            <h1>Welcome to your personal Event Generator!</h1>
            <h2>Please sign in below.</h2>
            {user ?
            <div><Homepage/></div>:
            <div><button onClick={signInWithGoogle}>Sign in with Google</button></div>}

        </div>
    )

}
