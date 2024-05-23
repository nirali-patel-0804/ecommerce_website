import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import Product from './Pages/Product.jsx';
import men_banner from '../src/assets/men_banner.jpg'
import women_banner from '../src/assets/women_banner.webp'
import kids_banner from '../src/assets/kids_banner.jpg'
const App = () => {
  return (
    
      <BrowserRouter>
      <div className="app">
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} Category="Men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} Category="Women"/>} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner}  Category="Kids" />} />
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/login' element={<LoginSignup />}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
        </div>
       
      </BrowserRouter>
  
  );
};

export default App;