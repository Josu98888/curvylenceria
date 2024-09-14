import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../css/registerForm.module.css";
import { useNavigate } from "react-router-dom";

const PerfilUser = () => {
    const { user, logout,loading } = useContext(AuthContext);
    const navigate = useNavigate() ;

    if (loading) {
        return <p>Cargando...</p>; // Mostrar mientras los datos están cargándose
    }

    const handleLogout = () => {
     logout() ;
     navigate('/') ;
    }
    return (
        <div className={styles.loginUser}>
            <div className={styles.containerloginUser}>
                {/* titulo */}
                <div className={styles.loginUser__containerTitle}>
                    <h1 className={styles.loginUser__title}>
                        {user.firstname}
                    </h1>
                    <div className={styles.loginUser__underline}></div>
                </div>
                {/* texto  */}
                <p className={styles.loginUser__text}>Nos alegra mucho tenerte aquí. Esperamos que disfrutes de la experiencia y encuentres justo lo que estás buscando. ¡Explora nuestros productos, agrega tus favoritos al carrito y no dudes en contactarnos si necesitas ayuda! ¡Gracias por ser parte de nuestra comunidad!</p>
                {/* botones para elegir ruta login o register */}
                <div className={styles.loginUser__containerBtns}>
                    <button className={styles.loginUser__button} onClick={handleLogout}>
                        cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PerfilUser;
