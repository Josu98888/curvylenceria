import { useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
     const { user } = useContext(AuthContext);
     const navigate = useNavigate()

     // Si el usuario no está autenticado, redirigir a la página de login
     if (!user) {
       return navigate('/');
     }
   
     // Si el usuario está autenticado, renderizar el contenido protegido
     return children;
}

export default ProtectedRoute