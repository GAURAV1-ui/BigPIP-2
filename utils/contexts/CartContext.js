import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  calculateSubtotal: () => {},
  calculateTotal: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = (discount = 0) => {
    // Apply any discounts or promotions here
    const subtotal = calculateSubtotal();
    return subtotal - discount; // Example discount of $5
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateSubtotal,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
return useContext(CartContext);
}