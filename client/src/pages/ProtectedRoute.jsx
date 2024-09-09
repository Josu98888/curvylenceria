import { useContext, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate() ;

    useEffect(() => {
      if (!user) {
        navigate('/'); // Redirigir si el usuario no está autenticado
      }
    }, [user, navigate]);
    // Si el usuario está autenticado, renderizar el contenido protegido
    return children;
};

export default ProtectedRoute;
