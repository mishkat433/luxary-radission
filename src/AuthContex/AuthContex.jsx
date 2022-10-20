import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const UserContex = createContext()
const auth = getAuth(app);

const AuthContex = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');


    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const profileUpdate = (name) => {
        updateProfile(auth.currentUser, { displayName: name, })
            .then(() => { }).catch((error) => {
                console.log(error.message);
            });
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();

    }, [])

    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
        });
    }


    const sendContex = {
        user, setUser, loading, setLoading, createUser,
        profileUpdate, loginUser, error, setError, logOut,
        googleLogin
    }

    return (
        <div>
            <UserContex.Provider value={sendContex}>
                {children}
            </UserContex.Provider>
        </div>
    );
};

export default AuthContex;