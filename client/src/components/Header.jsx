import React, { useContext, useState } from "react";
import styles from "../css/header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.header}>
            {/*/ parte izq menu */}
            <button className={styles.header__menu} onClick={toggleMenu}>
                <i className="bi bi-list-stars"></i>
            </button>
            {isMenuOpen && <DropdownMenu />}
            {/*/ parte izq menu */}
            <Link to={user ? "/perfilUser" : "/registerForm"}>
                <button className={styles.header__user}>
                    <i className="bi bi-person-heart"></i>
                </button>
            </Link>
        </div>
    );
};

export default Header;
