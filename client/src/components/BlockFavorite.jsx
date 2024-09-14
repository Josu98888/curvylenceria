import React from 'react' ;
import { useFavoriteContext } from '../context/Favorites';

const BlockFavorite = ({item, _size}) => {
     const { favorite, addFavorite } = useFavoriteContext();
     const size = _size ;

     const isFavorite = favorite.some((fav) => fav._id === item._id);

     return (
         <div onClick={() => addFavorite(item)}>
             {isFavorite ? (
                 <i
                     className="bi bi-heart-fill"
                     style={{ color: "red", fontSize: size }}
                 ></i>
             ) : (
                 <i className="bi bi-heart"
                 style={{ fontSize: size }}></i>
             )}
         </div>
     );
}

export default BlockFavorite