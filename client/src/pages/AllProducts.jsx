import React, { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { getProductsFetch } from "../api/getProductsFetch";
import PaginatedComponent from "../components/PaginatedComponent";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFetch()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2>Todos los productos</h2>
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
    );
};

export default AllProducts;
