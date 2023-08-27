import React from 'react';
import ReactDOM from 'react-dom/client';
import "./view/assets/css/index.css";
import Home from './view/pages/home';
import Products from './view/pages/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './view/pages/categories';
import CategoryProducts from './view/pages/categoryProducts';
import ProductPage from './view/pages/product';
import Sale from './view/pages/sale';
import ShoppingCart from './view/pages/shoppingCart';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryProducts" element={<CategoryProducts />} />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
  </BrowserRouter>
);



