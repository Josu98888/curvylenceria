import { useContext, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
     const { user } = useContext(AuthContext);
     const navigate = useNavigate()

     useEffect(() => {
      if (!user) {
        navigate('/'); // Redirigir si el usuario no está autenticado
      }
    }, [user, navigate]);

     if (!user) {
       return null ;
     }
   
     // Si el usuario está autenticado, renderizar el contenido protegido
     return children;
}

export default ProtectedRoute