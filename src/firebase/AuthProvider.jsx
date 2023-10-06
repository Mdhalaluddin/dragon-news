import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null);
const auth =getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lodding, setLodding]= useState(true);
    const createUser = (email, password)=>{
        setLodding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn =(email, password)=>{
        setLodding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        setLodding(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubsCribe =  onAuthStateChanged(auth, currentUs =>{
              console.log('user in the auth', currentUs)
          setUser(currentUs)
          setLodding(false)
          });
          return()=>{
              unSubsCribe()
          }
      },[])
    const authInfo = {
        user,
        signIn,
        createUser,
        logOut,
        lodding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;