import React, { useContext, useState } from "react";
import styles from "../css/header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DropdownMenu from "./DropdownMenu";
import logo from '../assets/logoLargo.png';
import logoLong from '../assets/logoExtraLargo.png'
import AuthOptions from "./AuthOptions";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.header}>
            {/*/ parte izq menu mobile y laptop*/}
            <button className={styles.header__menu} onClick={toggleMenu}>
                <i className="bi bi-list-stars"></i>
            </button>
            {isMenuOpen && <DropdownMenu onCloseMenu={toggleMenu} />}
            <div className={styles.header__containerLong}>
                <img
                    className={styles.header__logoLong}
                    src={logoLong}
                    alt="logo"
                />
            </div>
            {/* parte cen logomobile y laptop*/}
            <div className={styles.header__containerLogo}>
                <img
                    className={styles.header__logo}
                    src={logo}
                    alt="logo"
                />
            </div>
            {/*/ parte izq usuario mobile y laptop*/}
            <Link to={user ? "/perfilUser" : "/registerForm"}>
                <button className={styles.header__user}>
                    <i className="bi bi-person-heart"></i>
                </button>
            </Link>
            {/* parte der usuario laptop */}
            <AuthOptions/>
        </div>
    );
};

export default Header;
