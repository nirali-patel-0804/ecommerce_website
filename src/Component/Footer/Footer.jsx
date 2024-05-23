import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
<div className='footer1'>
  <div className='Footer'>
    <div className="footer-logo">
        <img src={logo}/>
        <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icons-container">
           <InstagramIcon />
           <PinterestIcon />
           <WhatsAppIcon  />
        </div>
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Right Reserved</p>
    </div>
    </div>
</div>    
  )
}

export default Footer;
