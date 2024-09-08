import React from 'react' ;
import { useFavoriteContext } from '../context/Favorites';

const BlockFavorite = ({item}) => {
     const { favorite, addFavorite } = useFavoriteContext();

     const isFavorite = favorite.some((fav) => fav._id === item._id);

     return (
         <div onClick={() => addFavorite(item)}>
             {isFavorite ? (
                 <i
                     className="bi bi-heart-fill"
                     style={{ color: "red" }}
                 ></i>
             ) : (
                 <i className="bi bi-heart"></i>
             )}
         </div>
     );
}

export default BlockFavorite