import React from "react";
import { useFavoriteContext } from "../context/Favorites";
import CardProduct from "../components/CardProduct";

const Favorites = () => {
    const { favorite } = useFavoriteContext();
  
    return (
        <div>
            <h1>Favoritos</h1>
            {favorite.map((item) => (
          <div className='col-6 col-md-4 col-lg-3'>
            <CardProduct key={item._id} item={item} /> 
          </div>
        )) }
        </div>
    )
};

export default Favorites;
