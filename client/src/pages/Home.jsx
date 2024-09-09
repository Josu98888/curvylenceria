import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SocialNetworks from "../components/SocialNetworks";
import SliderProducts from "../components/SliderProduct";
import Offers from "./Offers";
import ButtonAll from "../components/ButtonAll";

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
            {/* destacados */}
            <div>
                <SliderProducts />
            </div>
            <div>
            <ButtonAll route={'/products'} title={'Todos los productos'}/>
            </div>
            {/* ofertas */}
            <div>
                <Offers />
            </div>
            {/* Boton todas las offertas */}
            <div>
            <ButtonAll route={'/offers'} title={'Todas las ofertas'}/>
            </div>
            {/* redes sociales */}
            <div>
                <SocialNetworks />
            </div>
        </div>
    );
};

export default Home;
