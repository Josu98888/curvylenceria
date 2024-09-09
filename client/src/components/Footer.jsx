import React from "react";
import styles from "../css/footer.module.css";


const Footer = () => {
  return (
    <div className={styles.footer}>
      {/*parte arriba*/}
      <div >
      </div>
      {/*parte central*/}
      <div className={styles.footer__redes}>
        <div className={styles.footer__redes__redSocial}>
          <i className="bi bi-tiktok"></i>
        </div>
        <div className={styles.footer__redes__redSocial}>
          <i className="bi bi-instagram"></i>
        </div>
        <div className={styles.footer__redes__redSocial}>
          <i className="bi bi-facebook"></i>
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
