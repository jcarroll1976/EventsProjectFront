import React, {useContext} from 'react'
import { signInWithGoogle, signOut } from "../firebaseconfig";
import Homepage from './Homepage';
import {useParams} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import "./Login.css";
import background from "../pexels-maegan-neufeld-342411.jpg"

export default function Login() {
    const {user} = useContext(AuthContext)
    const imgClass = ["Login_BackgroundImg", "shimmer"]

    return (
        <div className = "LoginComponent" >
            {user ?
            <div><Homepage/></div>:
            <div>
                <img className={imgClass.join(" ")} src={background}/>
                <main className="Login_GreetingContainer">
                    <h1 className="Login_Welcome">Welcome to your personal Event Generator!</h1>
                    <h2 className="Login_SignIn">Please sign in above to find events just for you!</h2>
                </main>
            </div>
            }

        </div>
    )

}
