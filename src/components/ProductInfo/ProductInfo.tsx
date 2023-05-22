import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '..';
import { CartContext } from '../../CartContext';
import { FaCartPlus } from 'react-icons/fa';
import list from '../../list.json';
import './productInfo.css';


type Item = {
  id: number;
  imagePath: string;
  title: string;
  price: number;
}

const ProductInfo = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const { id } = useParams<{ id: string }>();

  const productId = id ? parseInt(id, 10) : null;
  const product = list.find((item:Item) => item.id === productId);

  if (!product) {
    return <div>Loading... {id}</div>;
  }
  else{
  return (
    <div>
      <Navbar />
      <div className='product'>
      <h1>{product.title}</h1>
        <div className='product-info'>
        <img src={product.imagePath} alt={product.title} />
          <div className="product-info_text">
            <div>
              <p>Title: {product.title}</p>
              <p>Ultimate LEGO set for any ages! Unleash Your Inner Architect!</p>
              <p>Price: ${product.price}</p>
            </div>
            <button onClick={()=>addToCart(product)}><FaCartPlus /></button>
          </div>
        </div>
        <Link to={`/`} className='back-button'>
          Back
        </Link>
      </div>
    </div>
  )}
}

export default ProductInfo