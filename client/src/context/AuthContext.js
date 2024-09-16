import { useState, createContext, useEffect } from "react";
import { getMeFetch } from "../api/getMeFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true) ;
     useEffect(() => {
          (async () => {
               try {
                 const token = localStorage.getItem('access');
                 if (token) {
                   await login(token); // llama a login solo si hay token
                 }
               } catch (error) {
                 console.error('Error durante la autenticación:', error);
               } finally {
                 setLoading(false); // loading se desactiva siempre
               }
             })();
     }, []);

     const login = async (token) => {
          if(!token) {
               return ;
          }
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
          loading,
     }

     return <AuthContext.Provider value={data}> {children}  </AuthContext.Provider>
}
