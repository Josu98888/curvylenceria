import React from "react";
import styles from "../css/menuLaptop.module.css";
import { Link } from "react-router-dom";

const MenuLaptop = () => {
    return (
        <div className={styles.menuLaptop}>
            <div className={styles.menuLaptop__containerLinks}>
                <Link className={styles.menuLaptop__Link} to={'/'}>Home</Link>
                <Link className={styles.menuLaptop__Link} to={'/favorites'}>Favoritos</Link>
                <Link className={styles.menuLaptop__Link} to={'/products'}>Productos</Link>
                <Link className={styles.menuLaptop__Link} to={'/offers'}>Ofertas</Link>
                <Link className={styles.menuLaptop__Link} to={'/aboutUs'}>Sobre nosotros</Link>
            </div>
        </div>
    );
};

export default MenuLaptop;
