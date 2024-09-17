import React, { useState } from "react";
import styles from "../css/registerForm.module.css";
import style from '../css/validation.module.css' ;
import { Link, useNavigate } from "react-router-dom";
import { registerFetch } from "../api/registerFetch";
import {validateEmail,validatePassword,validateUsername} from "../utils/validations";

const RegisterForm = () => {
    const navigate = useNavigate() ;
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('') ;
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        password: "",
    });
    const { firstname, email, password } = formData;

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const usernameError = validateUsername(firstname);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (emailError || passwordError || usernameError) {
                setErrors({
                    email: emailError,
                    password: passwordError,
                    username: usernameError,
                });
            } else {
                try {
                    const res = await registerFetch(formData);
                    console.log(res);
                    setErrors({}) ;
                    setSuccess(res.msg) ;
                    setTimeout(() => {
                        navigate('/loginForm');
                    }, 2000);
                } catch (error) {
                   throw error ;
                }
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
                        {errors.username && <p className={style.errorValidation} >{errors.username}</p>}
                        {/* email */}
                        <div className={styles.loginUser__containerInput}>
                            <i
                                className={`bi bi-envelope-at-fill mx-1 ${styles.loginUser__iconInput}`}
                            ></i>
                            <input
                                className={styles.loginUser__input}
                                type="email"
                                placeholder="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.email && <p className={style.errorValidation} >{errors.email}</p>}
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
                        {errors.password && <p className={style.errorValidation} >{errors.password}</p>}
                        {success && <p className={style.successValidation} >{success}</p>}
                    </div>
                    {/* botones para elegir ruta login o register */}
                    <div className={styles.loginUser__containerBtns}>
                        <button className={styles.loginUser__button} type="submit">
                            Registrarse
                        </button>
                        <Link className={styles.loginUser__link} to={`/loginForm`}>
                            <button className={styles.loginUser__button}>
                                Iniciar sesión
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
