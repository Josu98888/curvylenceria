import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/cardProduct.module.css";
import BlockFavorite from '../components/BlockFavorite' ;
import HaveOffer from '../components/HaveOffer' ;

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
                {/* contenedor favorito y precio */}
                <div className={styles.cardProduct__containerPriceAndFav}>
                    {/* precio */}
                    <HaveOffer item= {item} _size={"15px"}/>
                    {/* favorito */}
                    <BlockFavorite item= {item} _size={"15px"} />
                </div>
                {/* ver producto*/}
                <div className={styles.cardPoduct__containerCart} >
                    <Link
                        className={styles.cardProduct__link}
                        to={`/products/${item._id}`}
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
