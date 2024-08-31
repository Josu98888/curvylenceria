import React, { useState } from "react";
import styles from "../css/registerForm.module.css";
import { Link } from "react-router-dom";
import { registerFetch } from "../api/registerFetch";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        password: "",
    });

    const { firstname, email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await registerFetch(formData);
                console.log(res);
            } catch (error) {
               throw error ;
            }
        };
    return (
        <form id="registerForm" onSubmit={handleSubmit}>
            <div className={styles.loginUser}>
                <div className={styles.containerloginUser}>
                    {/* titulo */}
                    <div className={styles.loginUser__containerTitle}>
                        <h1 className={styles.loginUser__title}>Registro</h1>
                        <div className={styles.loginUser__underline}></div>
                    </div>
                    {/* inputs */}
                    <div className={styles.loginUser__containerInputs}>
                        {/* nombre */}
                        <div className={styles.loginUser__containerInput}>
                            <i
                                className={`bi bi-person-heart mx-1 ${styles.loginUser__iconInput}`}
                            ></i>
                            <input
                                className={styles.loginUser__input}
                                type="text"
                                placeholder="nombre"
                                name="firstname"
                                value={firstname}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* mensaje error */}
                        {/* <p ref={alertNameRef} className={`text-danger d-none ${styles.msgError}`} id={styles.form__error} ></p> */}
                        {/* email */}
                        <div className={styles.loginUser__containerInput}>
                            <i
                                className={`bi bi-envelope-at-fill mx-1 ${styles.loginUser__iconInput}`}
                            ></i>
                            <input
                                className={styles.loginUser__input}
                                type="email"
                                placeholder="email"
                                id="emailRegister"
                                name="emailRegister"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* mensaje error */}
                        {/* <p ref={alertEmailRef} className={`text-danger d-none ${styles.msgError}`} id={styles.form__error}></p> */}
                        {/* contraseña */}
                        <div className={styles.loginUser__containerInput}>
                            <i
                                className={`bi bi-envelope-at-fill mx-1 ${styles.loginUser__iconInput}`}
                            ></i>
                            <input
                                className={styles.loginUser__input}
                                type="password"
                                placeholder="contraseña"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    {/* botones para elegir ruta login o register */}
                    <div className={styles.loginUser__containerBtns}>
                        <button className={styles.loginUser__button} type="submit">
                            Registrarse
                        </button>
                        <Link to={`/loginForm`}>
                            <button className={styles.loginUser__button}>
                                Iniciar sesión
                            </button>
                        </Link>
                    </div>
                    {/* mensaje error */}
                    {/* <div ref={alertSuccessRef} className="alert alert-success ms-2 fs-6 d-none" ></div> */}
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
