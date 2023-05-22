import React, { createContext, useState } from 'react';

type Product = {
    id: number;
    imagePath:string;
    title: string;
    price: number;
};


type CartContextType = {
  cartItems: Product[];
  cartItemsPrice: number;
  addToCart: (product: Product) => void;
  removeCartItem: (productId: number) => void;
  clearCart: () => void;
}

type CartProviderProps ={
    children: React.ReactNode;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartItemsPrice: 0,
  addToCart: () => {},
  removeCartItem: () => {},
  clearCart: () => {},
});

const CartProvider = (props: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartItemsPrice, setCartItemsPrice] = useState<number>(0);

  const addToCart = (product: Product) => {
    setCartItemsPrice(cartItemsPrice + product.price);
    setCartItems([...cartItems, product]);
  };

  const removeCartItem = (productId: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    const removedProduct = cartItems.find(item => item.id === productId);
    if (removedProduct) {
      setCartItems(updatedCartItems);
      setCartItemsPrice(cartItemsPrice - removedProduct.price);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemsPrice(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartItemsPrice, addToCart, removeCartItem, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };