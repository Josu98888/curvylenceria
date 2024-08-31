import React from "react";
import styles from "../css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            {/*/ parte izq menu */}
            <button className={styles.header__menu}>
                <i className="bi bi-list-stars"></i>
            </button>
            {/*/ parte central logo*/}
            {/* <div className={styles.header__logo}>
                <img
                    className={styles.header__logo__image}
                    src={logo}
                    alt="logo"
                />
            </div> */}
            {/* parte izq usuario*/}
            <Link to={`/registerForm`}>
                <button className={styles.header__user}>
                    <i className="bi bi-person-heart"></i>
                </button>
            </Link>
        </div>
    );
};

export default Header;
