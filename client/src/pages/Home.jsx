import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AllProducts from "./AllProducts";

const Home = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Cargando...</p>; // Mostrar mientras los datos están cargándose
    }
    
    return (
        <div>
            <p>
                Bienvenido{" "}
                {user?.firstname ? (
                    <span>{user.firstname}</span> // Solo muestra el nombre si el usuario está autenticado
                ) : (
                    <span>Invitado</span> // Si no hay usuario, muestra algo más
                )}
            </p>
            {/*Todos los productos*/}
            <div>
                <AllProducts />
            </div>
        </div>
    );
};

export default Home;
