import React from "react";
import styles from "../css/socialNetworks.module.css";

const SocialNetworks = () => {
    return (
        <div className={styles.socialNetworks}>
            <h1>Seguinos en redes</h1>
            <div className={styles.socialNetworks__logo}>
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
    );
};

export default SocialNetworks;
