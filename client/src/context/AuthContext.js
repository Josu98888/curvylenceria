import { useState, createContext, useEffect } from "react";
import { getMeFetch } from "../api/getMeFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {

          (async () => {
               const token = localStorage.getItem('access');
               await login(token);
               setLoading(false)
          })();
     }, []);

     const login = async (token) => {
          try {
               const user = await getMeFetch(token);
               delete user.password;
               setUser(user);
          } catch (error) {
               console.log(error);
          }
     }

     const logout = () => {
          setUser(false) ;
          localStorage.clear() ;
     }

     const data = {
          user,
          setUser,
          login,
          logout,
     }
     if (loading) return <p>Cargando...</p>; 

     return <AuthContext.Provider value={data}> {children} </AuthContext.Provider>
}
