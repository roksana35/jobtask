import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Authprovider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // loginuser
    const logInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // google login
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
  
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
     setUser(currentuser);
     setLoading(false)
    });
    return unsubscribe();
},[])

    const authInfo={
        createuser,
        logInUser,
        googleSignIn,
        user,
        setUser
       



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;