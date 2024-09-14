import React from "react";
import SocialNetworks from "../components/SocialNetworks";
import style from "../css/title.module.css";
import styles from '../css/emptyComponent.module.css' ;

const AboutUs = () => {
    return (
        <div>
            <div>
                <h1 className={style.title}>Sobre nosotros</h1>
                <div className={styles.emptyComponent}>
                    <div className={styles.emptyComponent__containerText}>
                        <p className={styles.emptyComponent__text}>En CurvyLencería, celebramos la belleza en todas sus formas y tamaños. Nos especializamos en lencería femenina para mujeres con curvas, ofreciendo una amplia gama de talles para que cada mujer se sienta cómoda, segura y atractiva. Nuestros diseños están pensados para realzar las formas naturales, combinando estilo y confort. Queremos que cada prenda no solo se ajuste bien, sino que también empodere a nuestras clientas con confianza y estilo. ¡Porque todas las mujeres merecen sentirse fabulosas! </p>
                    </div>
                </div>
            </div>
            <div>
                <SocialNetworks />
            </div>
        </div>
    );
};

export default AboutUs;
