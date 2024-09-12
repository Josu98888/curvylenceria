import React, { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import styles from '../css/containerProducts.module.css'
import { getProductsFetch } from "../api/getProductsFetch";
import PaginatedComponent from "../components/PaginatedComponent";
import styleTitle from '../css/title.module.css' ;

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFetch()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2 className={styleTitle.title}>Todos los productos</h2>
            <PaginatedComponent
                items={products} // Los productos a paginar
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
        </div>
    );
};

export default AllProducts;
