import React, { useContext } from "react";
import styles from "../css/header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
    const {user } = useContext(AuthContext) ;
    return (
        <div className={styles.header}>
            {/*/ parte izq menu */}
            <button className={styles.header__menu}>
                <i className="bi bi-list-stars"></i>
            </button>
            <Link to={user ? '/perfilUser' : '/registerForm'}>
                <button className={styles.header__user}>
                    <i className="bi bi-person-heart"></i>
                </button>
            </Link>
        </div>
    );
};

export default Header;
