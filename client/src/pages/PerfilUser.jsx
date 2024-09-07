import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../css/registerForm.module.css";
import { useNavigate } from "react-router-dom";

const PerfilUser = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate() ;
    
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
