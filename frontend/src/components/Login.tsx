import React, {useContext} from 'react'
import { signInWithGoogle, signOut } from "../firebaseconfig";
import Homepage from './Homepage';
import {useParams} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Login() {
    const {user} = useContext(AuthContext)
    return (
        <div className = "LoginComponent">

            {user ?
            <div><Homepage/></div>:
            <div><button onClick={signInWithGoogle}>Sign in with Google</button></div>}

        </div>
    )

}

// original
/*
return(
    <div>
       <button onClick={signInWithGoogle}>Sign in with Google</button>
       <button onClick={signOut}>Sign out</button>
    </div>
)
*/