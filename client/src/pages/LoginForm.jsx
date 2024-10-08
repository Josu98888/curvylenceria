import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/registerForm.module.css";
import style from "../css/validation.module.css";
import { loginFetch } from "../api/loginFetch";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

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
            const { access } = await loginFetch(formData);
            if (access) {
                login(access);
            }
            localStorage.setItem("access", access);
            navigate("/");
        } catch (error) {
            setError(error.msg);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
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
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
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
                        {error && (
                            <p className={style.errorValidation}>{error}</p>
                        )}
                        {/* recuperar contraseña */}
                        <p className={styles.loginUser__forgotPass}>
                            Se olvido de contraseña?{" "}
                            <Link className={styles.loginUser__link} to={`/forgotPassword`}>
                                <span className={styles.forgotPassLink}>
                                    Click aquí
                                </span>
                            </Link>
                        </p>
                    </div>
                    {/* botones para elegir ruta login o register */}
                    <div className={styles.loginUser__containerBtns}>
                        <Link className={styles.loginUser__link} to={`/registerForm`}>
                            <button className={styles.loginUser__button}>
                                Registrarse
                            </button>
                        </Link>
                        <button
                            className={styles.loginUser__button}
                            type="submit"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
