import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from "../css/cardProduct.module.css";
import HaveOffer from '../components/HaveOffer' ;
import BlockFavorite from '../components/BlockFavorite';
import { CartContext } from '../context/CartShoppingContext.js';

function Product() {
    const product = useLoaderData();
    const { cart, setCart } = useContext(CartContext);

    const { image, title, price, discount, offer, _id, description} = product;

    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item._id === _id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item._id === _id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            } else {
                return [...currItems, { _id, image, title,discount, quantity: 1, price , offer}]
            }
        });
    };

    const removeToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item._id === _id)?.quantity === 1;
            if (isItemFound) {
                return currItems.filter((item) => item._id !== _id);
            } else {
                return currItems.map((item) => {
                    if (item._id === _id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item
                    }
                });
            }
        })
    }

    const getQuantityById = (id) => {
        return cart.find((item) => item._id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(_id);

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
                <div className={styles.cardProduct__containerPriceAndFav}>
                    {/* precio */}
                    <HaveOffer item= {product}/>
                    {/* favorito */}
                    <BlockFavorite item= {product}/>
                </div>
                <div>
                    <p className={styles.cardProduct__text}>{description}</p>
                </div>
                {/* quantity */}
                {quantityPerItem > 0 && (
                    <div className={styles.cardProduct__text} > Cantidad seleccionada: {quantityPerItem} </div>
                )
                }
                {/* agregar al carrito */}
                <div className={styles.cardPoduct__containerCart}>
                    <div>
                        {
                            quantityPerItem === 0 ? (
                                <button
                                    className={styles.cardProduct__link}
                                    onClick={() => addToCart()}
                                >
                                    Agregar Carrito
                                </button>
                            ): (
                                <button
                                    className={styles.cardProduct__link}
                                    onClick={() => addToCart()}
                                >
                                    Agregar más
                                </button>
                            )
                        }
                        {
                            quantityPerItem > 0 && (
                                <button
                                    className={styles.cardProduct__link}
                                    onClick={() => removeToCart()}
                                >
                                    Quitar
                                </button>
                            )
                        }
                    </div>
                    <i className="bi bi-bag-heart "></i>
                </div>
            </div>
        </div>
    );
}

export default Product;
