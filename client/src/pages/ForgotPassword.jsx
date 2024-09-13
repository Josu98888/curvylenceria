import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/registerForm.module.css";
import style from "../css/validation.module.css";
import { changePasswordFetch } from "../api/changePasswordFetch";
import { validatePassword } from "../utils/validations";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [error, setErrors] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
    });

    const { email, newPassword, oldPassword } = formData;

    const passwordError = validatePassword(newPassword);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordError) {
            setErrors({ passwordError: passwordError });
        } else {
            try {
                const token = localStorage.getItem("access");
                const result = await changePasswordFetch(formData, token);
                console.log(result);
                setErrors({});
                setSuccess(result.msg);
                setTimeout(() => {
                    navigate("/loginForm");
                }, 2000);
            } catch (error) {
                setErrors({ passwordError: error.msg });
            }
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.loginUser}>
                <div className={styles.containerloginUser}>
                    {/* titulo */}
                    <div className={styles.loginUser__containerTitle}>
                        <h1 className={styles.loginUser__title}>Usuario</h1>
                        <div className={styles.loginUser__underline}></div>
                    </div>
                    {/* inputs */}
                    <div className={styles.loginUser__containerInputs}>
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
                        <div className={styles.loginUser__containerInput}>
                            <i
                                className={`bi bi-envelope-at-fill mx-1 ${styles.loginUser__iconInput}`}
                            ></i>
                            <input
                                className={styles.loginUser__input}
                                type="password"
                                placeholder="Contraseña actual"
                                name="oldPassword"
                                value={oldPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.loginUser__containerInput}>
                            <i
                                className={`bi bi-envelope-at-fill mx-1 ${styles.loginUser__iconInput}`}
                            ></i>
                            <input
                                className={styles.loginUser__input}
                                type="password"
                                placeholder="Nueva contraseña"
                                name="newPassword"
                                value={newPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        {error.passwordError &&  <p className={style.errorValidation}>{error.passwordError}</p>}
                        {success && <p className={style.successValidation} >{success}</p>}
                    </div>
                    {/* botones para cambiar contraseña*/}
                    <div className={styles.loginUser__containerBtns}>
                        <button
                            className={styles.loginUser__button}
                            type="submit"
                        >
                            Cambiar contraseña
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ForgotPassword;
