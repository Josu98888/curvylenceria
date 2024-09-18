import React from "react";
import styles from "../css/socialNetworks.module.css";
import styleTitle from "../css/title.module.css";
import logo from "../assets/logoChico.png";

const SocialNetworks = () => {
    return (
        <div className={styles.socialNetworks}>
            <div className={styles.socialNetworks__container}>
                <h1 className={styleTitle.title}>Seguinos en redes</h1>
                <div className={styles.socialNetworks__containerLogo}>
                    <img
                        className={styles.socialNetworks__logo}
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className={styles.socialNetworks__redes}>
                    <div className={styles.socialNetworks__redes__redSocial}>
                        <i className="bi bi-tiktok light"></i>
                    </div>
                    <div className={styles.socialNetworks__redes__redSocial}>
                        <i className="bi bi-instagram"></i>
                    </div>
                    <div className={styles.socialNetworks__redes__redSocial}>
                        <i className="bi bi-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialNetworks;
