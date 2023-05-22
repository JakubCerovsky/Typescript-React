import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorPage, ShoppingCart, ProductInfo } from './components';
import { CartProvider } from './CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Cart",
    element: <ShoppingCart />,
    errorElement: <ErrorPage />
  },
  {
    path: "/item/:id",
    element: <ProductInfo />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Pay",
    element: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
