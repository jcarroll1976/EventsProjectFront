import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,
 GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjybWPbC-ItHi2A1hFDzKtOrGYbm9MZ5Y",
  authDomain: "final-project-event-app.firebaseapp.com",
  projectId: "final-project-event-app",
  storageBucket: "final-project-event-app.appspot.com",
  messagingSenderId: "700316503926",
  appId: "1:700316503926:web:e3447aaa2d6b822b863457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
    }
    export function signOut(): void {
    auth.signOut();
    }