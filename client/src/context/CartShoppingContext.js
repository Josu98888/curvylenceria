import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext(null);

export const CartShoppingProvider = ({ children }) => {
     // Recupera los favoritos desde localStorage cuando se cargue el componente
     const [cart, setCart] = useState(() => {
          const savedCart = localStorage.getItem("carrito");
          return savedCart ? JSON.parse(savedCart) : [];
     });

     // Guarda los favoritos en localStorage cada vez que cambien
     useEffect(() => {
          localStorage.setItem("carrito", JSON.stringify(cart));
     }, [cart]);

     return (
          <CartContext.Provider value={{cart, setCart}} >
               {children}
          </CartContext.Provider>
     )
}
