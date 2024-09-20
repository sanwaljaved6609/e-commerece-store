import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    console.log("Adding to cart context:", { product, quantity });
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, quantity }];
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  console.log("CartProvider cart state:", cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
