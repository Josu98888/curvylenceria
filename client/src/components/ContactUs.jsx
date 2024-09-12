import React, { useRef, useState } from "react";
import {validateEmail,validateMessage,validateUsername} from "../utils/validations";
import emailjs from "@emailjs/browser";
import styles from "../css/contactUs.module.css";
import style from '../css/validation.module.css';
import styleTitle from '../css/title.module.css' ;

const ContactUs = () => {
    const refForm = useRef();
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('') ;
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = value;

    const emailError = validateEmail(email);
    const messageError = validateMessage(message);
    const usernameError = validateUsername(name);

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_noz8l9x";
        const templateId = "template_lvyuqs3";
        const apikey = "ZFjpcDQwgkBrGvzt4";

        if (emailError || messageError || usernameError) {
            setErrors({
                email: emailError,
                message: messageError,
                username: usernameError,
            });
        } else {
            setErrors({});
            setSuccess('Se envió correctamente el email.')
            emailjs
                .sendForm(serviceId, templateId, refForm.current, apikey)
                .then((result) => {
                    console.log(result.text) ;
                    setValue({ name: "", email: "", message: "" });
                    setTimeout(() => {
                        setSuccess('');
                    }, 5000); 
                })
                .catch((error) => console.error(error));
        }
    };
    return (
        <form
            id="contactForm"
            ref={refForm}
            action=""
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <h2 className={styleTitle.title}> Contactanos</h2>
            <input
                className={styles.form__input}
                id="userName"
                name="userName"
                type="name"
                placeholder="nombre"
                required
                value={name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
            {errors.username && <p className={style.errorValidation} >{errors.username}</p>}
            <input
                className={styles.form__input}
                name="emailUser"
                id="emailUser"
                type="email"
                placeholder="correo electronico"
                required
                value={email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            {errors.email && <p className={style.errorValidation} >{errors.email}</p>}
            <textarea
                className={styles.form__input}
                placeholder="mensaje"
                name="message"
                required
                value={message}
                onChange={(e) => setValue({ ...value, message: e.target.value })}
            ></textarea>
            {errors.message && <p className={style.errorValidation} >{errors.message}</p>}
            {success && <p className={style.successValidation} >{success}</p>}
            <button type="submit" className={styles.form__btn}>
                Enviar
            </button>
        </form>
    );
};

export default ContactUs;
