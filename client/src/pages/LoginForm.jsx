import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/registerForm.module.css";

const LoginForm = () => {
    return (
        <form id="registerForm">
            <div className={styles.loginUser}>
                <div className={styles.containerloginUser}>
                    {/* titulo */}
                    <div className={styles.loginUser__containerTitle}>
                        <h1 className={styles.loginUser__title}>
                            Iniciar sesión
                        </h1>
                        <div className={styles.loginUser__underline}></div>
                    </div>
                    {/* inputs */}
                    <div className={styles.loginUser__containerInputs}>
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
                            />
                        </div>
                    </div>
                    {/* recuperar contraseña */}
                    <p className={styles.loginUser__forgotPass}>
                        Se olvido de contraseña?{" "}
                        <Link to={`/forgotPassword`}>
                            <span className={styles.forgotPassLink}>
                                Click aquí
                            </span>
                        </Link>
                    </p>
                    {/* botones para elegir ruta login o register */}
                    <div className={styles.loginUser__containerBtns}>
                        <Link to={`/registerForm`}>
                            <button className={styles.loginUser__button}>
                                Registrarse
                            </button>
                        </Link>
                        <button className={styles.loginUser__button}>
                            Iniciar sesión
                        </button>
                    </div>
                    {/* mensaje error */}
                    {/* <div ref={alertSuccessRef} className="alert alert-success ms-2 fs-6 d-none" ></div> */}
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
