import React,{ createContext, useState } from "react";
import { AuthContextState, IUser } from "../types/AuthTypes";
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { auth } from '../firebase-config'




const defaultAuthContext:AuthContextState = {
    login:() =>{},
    currentUser:{},
    logout:()=>{},
    register:()=>{},
}



export const AuthContext = createContext(defaultAuthContext);

type AuthContextProviderProps = {
    children:React.ReactNode
}


const AuthProvider = ({children}:AuthContextProviderProps) =>{
    const [currentUser,setCurrentUser] = useState<any>();


    onAuthStateChanged(auth,async (newUser)=>{
      console.log("called on auth state");
       await setCurrentUser(newUser);
       })
       

    const register = async (user:IUser)=>{
        try {
          const newUser = await createUserWithEmailAndPassword(auth,user.email,user.password);
          console.log(newUser);
        } catch (error:any) {
          console.log(error.message);
        }
        
      }
    
      const login =async (user:IUser) =>{
        try {
            const newUser = await signInWithEmailAndPassword(auth,user.email,user.password);
            console.log(newUser);
            setCurrentUser(currentUser);
          } catch (error:any) {
            console.log(error.message);
          }
      }
    
    
      const logout =async  () =>{
        await signOut(auth);
      }

       const value = {
           login,
           currentUser,
           logout,
           register,
       }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}


export default AuthProvider;