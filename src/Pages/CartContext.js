import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('dominos_cart');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dominos_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemName, itemPrice) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.name === itemName);
      if (existingItemIndex !== -1) {
        const updatedCartItems = prevCartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              amount: (item.quantity + 1) * itemPrice,
              price: itemPrice
            };
          }
          return item;
        });
        return updatedCartItems;
      } else {
        return [...prevCartItems, { name: itemName, price: itemPrice, quantity: 1, amount: itemPrice }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.name !== itemName));
  };

  const incrementQuantity = (itemName) => {
    setCartItems(prevCartItems => prevCartItems.map(item => {
      if (item.name === itemName) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
          amount: newQuantity * item.price
        };
      }
      return item;
    }));
  };

  const decrementQuantity = (itemName) => {
    setCartItems(prevCartItems => prevCartItems.map(item => {
      if (item.name === itemName) {
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          return null;
        }
        return {
          ...item,
          quantity: newQuantity,
          amount: newQuantity * item.price
        };
      }
      return item;
    }).filter(item => item !== null));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
