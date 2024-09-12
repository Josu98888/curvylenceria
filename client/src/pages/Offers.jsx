import React, { useEffect, useState } from "react";
import { getProductsFetch } from "../api/getProductsFetch";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";

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
            <h2>Ofertas</h2>
            <PaginatedComponent
                items={offers} // Los productos a paginar
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
export default Offers;
