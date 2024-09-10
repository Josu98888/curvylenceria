import React from "react";
import SocialNetworks from "../components/SocialNetworks";
import ContactUs from "../components/ContactUs";
import styles from "../css/title.module.css";

const AboutUs = () => {
    return (
        <div>
            <div>
                <h1 className={styles.title}>Sobre nosotros</h1>
                <div className="d-flex justify-content-center m-2">
                    <p className={`${styles.text} p-2`}>
                        tewyygedwgedggdewggdegdewgygedwgedwg
                    </p>
                </div>
            </div>
            <div>
                <h2 className={styles.title}>Nuestras redes</h2>
                <SocialNetworks />
            </div>
            <div>
                <h2 className={styles.title}>Podes comunicarte por email</h2>
                <ContactUs />
            </div>
        </div>
    );
};

export default AboutUs;
