import React from "react";
import styles from '../css/haveOffer.module.css' ;

const HaveOffer = ({ item, _size }) => {
    const { price, discount, offer } = item;
    const priceOffer = price - (price * discount) / 100;
    const size = _size ;

    return offer === true ? (
        <div className={styles.haveOffer}>
            <p className={styles.haveOffer__price} 
            style={{fontSize: size}}>
                {" "}
                $ {Math.ceil(priceOffer)}
            </p>
            <p className={styles.haveOffer__priceOld} 
            style={{fontSize: size}}> $ {price} </p>
        </div>
    ) : (
        <p className={styles.haveOffer__price} 
        style={{fontSize: size}}> ${priceOffer}</p>
    );
};

export default HaveOffer;
