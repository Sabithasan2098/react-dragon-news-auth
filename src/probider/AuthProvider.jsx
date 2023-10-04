import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
 

export const AuthContext = createContext(null)

const auth = getAuth(app)

const Authprovider = ({children}) => {

const [user,setUser] = useState([])

const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const logIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () =>{
    return signOut(auth)
}


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log('user in the auth state change', currentUser);
        setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
},[])

const authInfo ={
    user,
    createUser,
    logIn,
    logOut,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;