import React from "react";
import { useLocation } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";
import styles from "../css/containerProducts.module.css";
import styleTitle from "../css/title.module.css";
import EmptyComponent from "../components/EmptyComponent";

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || {};
    const text = "Lo sentimos, no pudimos encontrar ningún producto que coincida con tu búsqueda. Por favor, intenta con otro término o revisa nuestras categorías para encontrar lo que buscas.";

    // Verificamos si results es un array, de lo contrario le asignamos un array vacío
    const products = Array.isArray(results) ? results : [];

    return (
        <div>
            <h2 className={styleTitle.title}>Resultados de la búsqueda</h2>
            {products.length === 0 ? (
                <EmptyComponent text={text} />
            ) : (
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
            )}
        </div>
    );
};

export default SearchResults;
