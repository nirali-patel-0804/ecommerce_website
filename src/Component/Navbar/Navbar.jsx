import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {  Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
    return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}>
          <Link to="/" className='li'>Shop{menu==="Shop"?<hr/>:<></>}</Link>
        </li>
        <li onClick={()=>{setMenu("men")}}>
          <Link to="/men"  className='li'>Men{menu==="men"?<hr/>:<></>}</Link>
        </li>
        <li onClick={()=>{setMenu("women")}}>
          <Link to="/women"  className='li'>Women{menu==="women"?<hr/>:<></>}</Link>
        </li>
        <li onClick={()=>{setMenu("kid")}}>
          <Link to="/kids"  className='li'>Kids{menu==="kid"?<hr/>:<></>}</Link>
        </li>
        </ul>
        <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart">
          <div className='shopping_icon'>
            <ShoppingCartIcon style={{ fontSize: '39px' }} />
          </div>
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      </div>
  );
};

export default Navbar;