import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/Products/ProductList';
import DetailProduct from './components/Products/DetailProduct';
import './App.css';

function App() {
  return (
<Router>
  <div className="app-wrapper">
    <Header />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<DetailProduct />} />
    </Routes>
    <Footer />
  </div>
</Router>
  );
}

export default App;