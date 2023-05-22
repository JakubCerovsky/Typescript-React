
import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Footer, Navbar } from '..';
import './shoppingCart.css';


const ShoppingCart = () => {
  const { cartItems, cartItemsPrice, removeCartItem, clearCart } = useContext(CartContext);


  return (
      <div>
        <Navbar />
        <div className='cart-container'>
          <div className="cart-header">
            <h2>Shopping Cart</h2>          
            <button onClick={clearCart}>Clear Cart</button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => removeCartItem(item.id)}>Remove</button>
                  <p>{item.title} - ${item.price}</p>

                </li>
              ))}
            </ul>
          )}
          <div className="payment-info">
            <h3>Total: ${cartItemsPrice}</h3>
            <a href="/Pay" className="payment-button">Payment</a></div>
        </div>
      </div>
  );
}

export default ShoppingCart;