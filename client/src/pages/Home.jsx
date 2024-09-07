import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { user } = useContext(AuthContext);

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
        </div>
    );
};

export default Home;
