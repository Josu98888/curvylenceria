import React, { useContext } from "react";
import { CartContext } from "../context/CartShoppingContext";
import ProductInCart from "../components/ProductInCart";
import styles from '../css/cartShopping.module.css' ;
const CartShopping = () => {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, curr) => {
        const priceOffer = curr.offer === true ? curr.price - (curr.price * curr.discount) / 100 : curr.price ;
        return acc + curr.quantity * priceOffer;
    }, 0);

    return (
        <div>
            <div>
                {cart.map((item) => (
                    <div key={item._id}>
                        <ProductInCart item={item} />
                    </div>
                ))}
            </div>
            <div className={styles.cartShopping__containerTotal}>
                <h1>Total: ${totalPrice} </h1>
            </div>
        </div>
    );
};

export default CartShopping;
