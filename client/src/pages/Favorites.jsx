import React from "react";
import { useFavoriteContext } from "../context/Favorites";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";

const Favorites = () => {
    const { favorite } = useFavoriteContext();
  
    return (
        <div>
            <h1>Favoritos</h1>
            <PaginatedComponent
                items={favorite} // Los productos a paginar
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
    )
};

export default Favorites;
