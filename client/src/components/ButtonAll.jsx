import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/buttonAll.module.css' ;

const ButtonAll = ({route,title}) => {
    return (
        <Link to={route} className={styles.containerBtn}>
            <button className={styles.button}>{title}</button>
        </Link>
    );
};

export default ButtonAll;