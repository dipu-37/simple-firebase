
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logedInuser = result.user;
                console.log(logedInuser)
                setUser(logedInuser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSigIn = () => {
        signInWithPopup(auth, githubprovider)
            .then(result => {
                const logedInuser = result.user;
                console.log(logedInuser)
            })
            .catch(error => {
                console.log(error)
            })
    }

return (
    <div>
        {
            user ?
             <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSigIn}>Github login</button>
                </>
        }


        {
            user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        }

    </div>
);
};

export default Login;