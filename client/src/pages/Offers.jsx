import React, { useEffect, useState } from "react";
import { getProductsFetch } from "../api/getProductsFetch";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";
import styles from '../css/containerProducts.module.css' ;
import styleTitle from '../css/title.module.css' ;

const Offers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFetch()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    const offers = products.filter((e) => e.offer === true);

    return (
        <div>
            <h2 className={styleTitle.title}>Ofertas</h2>
            <PaginatedComponent
                items={offers} // Los productos a paginar
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
export default Offers;
