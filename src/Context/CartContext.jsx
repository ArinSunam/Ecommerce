import { createContext, useContext, useState, useEffect } from "react";
import { getCarts, addToLocalStorageCart, decreaseLocalStorageItemQuantity, removeFromLocalStorageCart } from "./Storage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initialCarts = getCarts() || [];
  const [cartItems, setCartItems] = useState(initialCarts);


  useEffect(() => {
    setCartItems(getCarts());
  }, []);

  const addToCart = (item) => {
    addToLocalStorageCart(item);
    setCartItems(getCarts());
  };


  const decreaseItemQuantity = (itemId) => {
    decreaseLocalStorageItemQuantity(itemId);
    setCartItems(getCarts());
  };


  const removeFromCart = (itemId) => {
    removeFromLocalStorageCart(itemId);
    setCartItems(getCarts());
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
