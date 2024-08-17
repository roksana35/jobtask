import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
  
    // logout
    const logoutUser=()=>{
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Ensure loading is set to false once user state is resolved
            // console.log("Current User:", currentUser); // Debugging log
        });
        return () => unsubscribe(); // Correct cleanup
    }, []);
// console.log(user)
    const authInfo={
        createuser,
        logInUser,
        googleSignIn,
        user,
        setUser,
        logoutUser,
        loading
       



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;