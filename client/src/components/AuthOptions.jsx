import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from '../css/authOptions.module.css' ;
import { Link } from "react-router-dom";

const AuthOptions = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className={styles.authOptions}>
            {!user ? (
                <div className={styles.authOptions__containerLinks}>
                    <Link className={styles.authOptions__link} to={"/registerForm"}>Registrarse</Link>
                    <Link className={styles.authOptions__link} to={"/loginForm"}>Iniciar Sesión</Link>
                </div>
            ) : (
                <div className={styles.authOptions__containerUser}>
                    <Link to={'/perfilUser'} className={styles.authOptions__link}>
                        Hola {" "} <span>{user.firstname}</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AuthOptions;
