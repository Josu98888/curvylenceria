import React from "react";
import styles from '../css/productInCart.module.css' ;

const ProductInCart = ({item}) => {
     const { image, title, price, discount, quantity, offer } = item;

     const priceOffer = offer === true ? price - (price * discount) / 100 : price ;

    const total =  quantity *  priceOffer;


    return (
        <div className={styles.productInCart}>
            {/* imagen */}
            <div className={styles.productInCart__containerImg}>
                <img
                className={styles.productInCart__img}
                    src={`http://localhost:3933/${image}`}
                    alt="product"
                />
            </div>
            {/* cantidad */}
            <div className={styles.productInCart__containerQuantity}>
                {/* title */}
                <p className={styles.productInCart__text} >{title}</p>
                <p className={styles.productInCart__text}>cantidad : {quantity}</p>
            </div>
            {/* total */}
            <div className={styles.productInCart__containerTotal}>
                <p className={styles.productInCart__text}>total :</p>
                <p className={styles.productInCart__text}>${total}</p>
            </div>
        </div>
    ); 
};

export default ProductInCart;
