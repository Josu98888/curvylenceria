import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/cardProduct.module.css";

const CardProduct = ({ item }) => {
    const { image, title } = item;

    return (
        <div className={styles.cardProduct}>
            <div className="card">
                {/* imagen */}
                <img
                    className="card-img-top"
                    src={`http://localhost:3933/${image}`}
                    alt="product"
                />
                {/* titulo */}
                <h1 className={styles.cardProduct__title}> {title} </h1>
                {/* ver producto*/}
                <div >
                    <Link
                        className={styles.cardProduct__link}
                    >
                        Ver producto
                    </Link>
                    <i className="bi bi-eye"></i>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
