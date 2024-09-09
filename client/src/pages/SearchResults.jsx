import React from "react";
import { useLocation } from "react-router-dom";
import CardProduct from "../components/CardProduct";

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || {};

    // Verificamos si results es un array, de lo contrario le asignamos un array vacío
    const products = Array.isArray(results) ? results : [];


    return (
        <div>
            <h2>Resultados de la búsqueda</h2>
            <div className="product-list">
                {products.map((item) => (
                    <div key={item._id} className="col-6 col-md-4 col-lg-3">
                        <CardProduct item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;