import { useState,createContext } from "react";
export const AuthContext = createContext() ;

export const AuthProvider = ({children}) => {
     const [user, setUser] =useState({
          firstname: "josu",
     }) ;

     const data = {
          user,
     }

}
return <AuthContext.ProviderProvider value={data}> {children} </AuthContext.ProviderProvider>