import React from 'react'
import { signInWithGoogle, signOut } from "../firebaseconfig";

export default function Login() {

    return(
        <div>
           <button onClick={signInWithGoogle}>Sign in with Google</button>
           <button onClick={signOut}>Sign out</button>
        </div>
    )
}