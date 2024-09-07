import React from "react";
import styles from "../css/dropdownMenu.module.css";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
    return (
        <div className={styles.dropdownMenu}>
            <ul>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text}>productos</Link>
                </li>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text}>destacados</Link>
                </li>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text}>ofertas</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
