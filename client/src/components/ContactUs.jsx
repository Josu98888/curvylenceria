import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../css/contactUs.module.css";

const ContactUs = () => {
    const refForm = useRef();

    const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = value;

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_noz8l9x";
        const templateId = "template_lvyuqs3";
        const apikey = "ZFjpcDQwgkBrGvzt4";

        emailjs
            .sendForm(serviceId, templateId, refForm.current, apikey)
            .then((result) => console.log(result.text))
            .catch((error) => console.error(error));
    }
    return (
        <form
            id="contactForm"
            ref={refForm}
            action=""
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <h2> Contactanos</h2>
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
            <textarea
                className={styles.form__input}
                placeholder="mensaje"
                name="message"
                required
                value={message}
                onChange={(e) =>
                    setValue({ ...value, message: e.target.value })
                }
            ></textarea>
            <button type="submit" className={styles.form__btn}>
                Enviar
            </button>
        </form>
    );
};

export default ContactUs;
