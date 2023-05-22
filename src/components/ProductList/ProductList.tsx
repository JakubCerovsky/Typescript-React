import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import {FaCartPlus} from 'react-icons/fa';
import './productList.css';

type ListProps = {
  products: {
    id: number;
    imagePath:string;
    title: string;
    price: number;
  }[];
}

const ProductList = (props: ListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState(9);
  const { cartItems, addToCart } = useContext(CartContext);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(parseInt(event.target.value,10) );
  };
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * selectedValue;
  const endIndex = startIndex + selectedValue;

  // Get the products to display based on the current page
  const currentProducts = props.products.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <main className='main-container'>

      <div className='product-list_pagination'>
        <button className='page-button' onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <select className='number-select' value={selectedValue} onChange={handleSelectChange}>
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
        <button className='page-button' onClick={nextPage} disabled={endIndex >= props.products.length}>
          Next
        </button>
      </div>

      <div className='product-list_container'>
        {currentProducts.map(product => (
          <div className='product-list_item' key={product.id}>
            <Link className='product-list_item-link' to={`/item/${product.id}`}>
              <img src={product.imagePath} alt={product.title} />
              </Link>
              <div className='product-list_item-info'>
                <div className="product-list_item-info_text">
                <Link className='product-list_item-link' to={`/item/${product.id}`}>
                  <h4>{product.title}</h4>
                  </Link>
                  <h3>${product.price}</h3>
                </div>
                <button onClick={()=>addToCart(product)}><FaCartPlus /></button>
              </div>

          </div>
        ))}
      </div>
      <div className='product-list_pagination'>
        <button className='page-button' onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <select className='number-select' value={selectedValue} onChange={handleSelectChange}>
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
        <button className='page-button' onClick={nextPage} disabled={endIndex >= props.products.length}>
          Next
        </button>
      </div>
    </main>
  )
}

export default ProductList