import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/Products/ProductList';
import DetailProduct from './components/Products/DetailProduct';
import ProductCard from './components/Products/ProductCard';
import './App.css';

function App() {
  const location = useLocation();
  const hideChrome =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/admin';
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<DetailProduct />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;