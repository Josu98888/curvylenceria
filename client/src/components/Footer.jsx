import React from "react";
import styles from "../css/footer.module.css";
import logo from '../assets/logoChiquito.png'


const Footer = () => {
  return (
    <div className={styles.footer}>
      {/*parte arriba*/}
      <div className={styles.footer__containerLogo}>
        <img src={logo} alt="logo" />
      </div>
      {/*parte central*/}
      <div className={styles.footer__redes}>
        <div className={styles.footer__redes__redSocial}>
          <i className={`bi bi-tiktok ${styles.footer__icon}`}></i>
        </div>
        <div className={styles.footer__redes__redSocial}>
          <i className={`bi bi-instagram ${styles.footer__icon}`}></i>
        </div>
        <div className={styles.footer__redes__redSocial}>
          <i className={`bi bi-facebook ${styles.footer__icon}`}></i>
        </div>
      </div>
      {/*parte abajo*/}
       <div className={styles.footer__copyright}>
          <h5 className={styles.footer__copyright__text}>
            Derechos reservados ©
          </h5>
       </div>
    </div>
  );
};

export default Footer;
