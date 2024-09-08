import React from "react";
import styles from '../css/cardProduct.module.css' ;

const HaveOffer = ({ item }) => {
    const { price, discount, offer } = item;
    const priceOffer = price - (price * discount) / 100;

    return offer === true ? (
        <div className="d-flex">
            <p className={styles.cardProduct__price}>
                {" "}
                $ {Math.ceil(priceOffer)}
            </p>
            <s className={styles.cardProduct__priceOld}> $ {price} </s>
        </div>
    ) : (
        <p className={styles.cardProduct__price}> ${priceOffer}</p>
    );
};

export default HaveOffer;
