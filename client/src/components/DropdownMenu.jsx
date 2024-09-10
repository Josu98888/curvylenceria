import React from "react";
import styles from "../css/dropdownMenu.module.css";
import { Link } from "react-router-dom";

const DropdownMenu = ({onCloseMenu}) => {
    return (
        <div className={styles.dropdownMenu}>
            <ul>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text} to={"/"} onClick={onCloseMenu}>
                        Home
                    </Link>
                </li>
                <li className={styles.dropdownMenu__li}>
                    <Link
                        className={styles.dropdownMenu__text} to={"/products"} onClick={onCloseMenu}>
                        Productos
                    </Link>
                </li>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text} to={'/favorites'} onClick={onCloseMenu}>
                        Favoritos
                    </Link>
                </li>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text} to={'/offers'} onClick={onCloseMenu}>Ofertas</Link>
                </li>
                <li className={styles.dropdownMenu__li}>
                    <Link className={styles.dropdownMenu__text} to={'/aboutUs'} onClick={onCloseMenu}>Nosotros</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
