import React ,{createContext,useState} from "react";

export const AuthContext = createContext;

export const AuthProvider = ({children}) => {
     
    const signin = (email,password) => {
             

        

    }


    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}