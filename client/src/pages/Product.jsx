import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductFetch } from '../api/getProductFetch';
import { CartContext } from '../context/CartShoppingContext';
import styles from '../css/product.module.css'; // Asegúrate de tener los estilos correctos
import HaveOffer from '../components/HaveOffer';
import BlockFavorite from '../components/BlockFavorite';

function Product() {
    const { _id } = useParams(); // Usamos _id en lugar de product_id
    const [product, setProduct] = useState(null);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        getProductFetch({ params: { _id } }) // Llama a tu función pasando el _id correcto
            .then((data) => {
                setProduct(data); // Almacena el producto en el estado
            })
            .catch((error) => {
                console.error('Error al obtener el producto:', error); // Maneja el error
            });
    }, [_id]);

    // Si el producto no está cargado aún, evita el renderizado
    if (!product) {
        return <div>Cargando producto...</div>;
    }

    const { image, title, price, discount, offer, _id: productId, description } = product;

    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item._id === productId);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item._id === productId) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { _id: productId, image, title, discount, quantity: 1, price, offer }];
            }
        });
    };

    const removeToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item._id === productId)?.quantity === 1;
            if (isItemFound) {
                return currItems.filter((item) => item._id !== productId);
            } else {
                return currItems.map((item) => {
                    if (item._id === productId) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item._id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(productId);

    return (
        <div className={styles.product}>
            <div className="card">
                <img
                    className="card-img-top"
                    src={`http://localhost:3933/${image}`}
                    alt="product"
                />
                <h1 className={styles.product__title}> {title} </h1>
                <div className={styles.product__containerPriceAndFav}>
                    <HaveOffer item={product} _size={"25px"}/>
                    <BlockFavorite item={product} _size={"25px"}/>
                </div>
                <div>
                    <p className={styles.product__text}>{description}</p>
                </div>
                {quantityPerItem > 0 && (
                    <div className={styles.product__text}>
                        Cantidad seleccionada: {quantityPerItem}
                    </div>
                )}
                <div className={styles.product__containerCart}>
                    <div>
                        {quantityPerItem === 0 ? (
                            <button
                                className={styles.product__link}
                                onClick={() => addToCart()}
                            >
                                Agregar Carrito
                            </button>
                        ) : (
                            <button
                                className={styles.product__link}
                                onClick={() => addToCart()}
                            >
                                Agregar más
                            </button>
                        )}
                        {quantityPerItem > 0 && (
                            <button
                                className={styles.product__link}
                                onClick={() => removeToCart()}
                            >
                                Quitar
                            </button>
                        )}
                    </div>
                    <i className="bi bi-bag-heart"></i>
                </div>
            </div>
        </div>
    );
}

export default Product;
