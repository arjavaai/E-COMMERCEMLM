import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { currentUser } = useAuth();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem(`cart_${currentUser?.uid || 'guest'}`);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [currentUser]);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(`cart_${currentUser?.uid || 'guest'}`, JSON.stringify(cartItems));
  }, [cartItems, currentUser]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.prime * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const value = {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    openCart,
    closeCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};