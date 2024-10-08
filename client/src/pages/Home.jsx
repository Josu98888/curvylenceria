import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SocialNetworks from "../components/SocialNetworks";
import SliderProducts from "../components/SliderProduct";
import Offers from "./Offers";
import ButtonAll from "../components/ButtonAll";
import ContactUs from "../components/ContactUs";
import styleTitle from '../css/title.module.css' ;

const Home = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Cargando...</p>; // Mostrar mientras los datos están cargándose
    }

    return (
        <div>
            <h1 className={styleTitle.text}>
                Bienvenid❤️{" "}
                {user?.firstname ? (
                    <span>{user.firstname}</span> // Solo muestra el nombre si el usuario está autenticado
                ) : (
                    <span>Invitado</span> // Si no hay usuario, muestra algo más
                )}
            </h1>
            {/* destacados */}
            <div>
                <SliderProducts />
            </div>
            <div>
                <ButtonAll route={"/products"} title={"Todos los productos"} />
            </div>
            {/* redes sociales */}
            <div>
                <SocialNetworks />
            </div>
            {/* ofertas */}
            <div>
                <Offers />
            </div>
            {/* Boton todas las offertas */}
            <div>
                <ButtonAll route={"/offers"} title={"Todas las ofertas"} />
            </div>
            <div>
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;
