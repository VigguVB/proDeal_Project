import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProducts from './Admin Page/AddProducts';
import Cart from './Cart/Cart';
import ProductList from './Products/ProductList';
import Wishlist from './Wishlist/Wishlist';

function Routing(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="admin" element={<AddProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;