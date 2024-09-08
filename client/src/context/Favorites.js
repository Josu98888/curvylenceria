import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
     const [favorite, setFavorite] = useState([]);

     return (
          <FavoritesContext.Provider value={{ favorite, setFavorite }} >
               {children}
          </FavoritesContext.Provider>
     );
}

//hook para añadir favoritos
export function useFavoriteContext() {
     const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error("useFavoriteContext debe ser usado dentro de un FavoritesProvider");
    }

    const { favorite, setFavorite } = context;
    
     function addFavorite(newFavorite) {
          // verificar si hay item repetido
          const repeatedFavorite = favorite.some((item) => item._id === newFavorite._id) ;

          let newList = [...favorite] ;

          // verificar si se repite y agregar a la lista
          if(!repeatedFavorite) {
               newList.push(newFavorite) ;
               return setFavorite(newList) ;
          };

          // verificar si se repite y sacar de la lista
          newList = favorite.filter((fav) => fav._id !== newFavorite._id) ;
          return setFavorite(newList) ;
     }

     return {
          favorite, 
          addFavorite
     }
}