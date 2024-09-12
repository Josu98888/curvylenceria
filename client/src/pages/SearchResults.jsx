import React from "react";
import { useLocation } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";


const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || {};

    // Verificamos si results es un array, de lo contrario le asignamos un array vacío
    const products = Array.isArray(results) ? results : [];

    return (
        <div>
            <h2>Resultados de la búsqueda</h2>
            <div className="product-list">
                <PaginatedComponent
                    items={products} // Los productos a paginar
                    itemsPerPage={6} // Cantidad de productos por página
                    render={(currentProducts) => (
                        <div>
                            {currentProducts.map((item) => (
                                <div
                                    key={item._id}
                                    className="col-6 col-md-4 col-lg-3"
                                >
                                    <CardProduct item={item} />
                                </div>
                            ))}
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default SearchResults;
