import React from 'react';
import { Footer, Navbar, ProductList} from './components';
import {CartProvider} from './CartContext';
import list from './list.json';

const App= ()=>{
  return (
    <div>
        <Navbar />
        <ProductList products={list} />
        <Footer />
    </div>
  );
}

export default App;
