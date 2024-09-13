import React, { useContext } from "react";
import { CartContext } from "../context/CartShoppingContext";
import styles from "../css/containerProducts.module.css";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";
import styleTitle from "../css/title.module.css";
import EmptyComponent from "../components/EmptyComponent";

const CartShopping = () => {
    const { cart } = useContext(CartContext);
    const text = "Agregue productos al carrito y apareceran aquí.";

    const totalPrice = cart.reduce((acc, curr) => {
        const priceOffer =
            curr.offer === true
                ? curr.price - (curr.price * curr.discount) / 100
                : curr.price;
        return acc + curr.quantity * priceOffer;
    }, 0);

    return (
        <div>
            <h1 className={styleTitle.title}>Carrito </h1>
            {cart.length === 0 ? (
                <EmptyComponent text={text} />
            ) : (
                <PaginatedComponent
                    items={cart} // Los productos a paginar
                    itemsPerPage={6} // Cantidad de productos por página
                    render={(currentProducts) => (
                        <div className={styles.cardsWrapper}>
                            {currentProducts.map((item) => (
                                <div
                                    key={item._id}
                                    className={styles.cardsContainer}
                                >
                                    <CardProduct item={item} />
                                </div>
                            ))}
                        </div>
                    )}
                />
            )}
            <div className={styles.cartShopping__containerTotal}>
                <h1 className={styleTitle.title}>Total: ${totalPrice} </h1>
            </div>
        </div>
    );
};

export default CartShopping;
