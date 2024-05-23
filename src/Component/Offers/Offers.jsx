import React from 'react'
import './Offers.css'
import exclusive_img4 from '../../assets/exclusive_img4.webp'
const Offers = () => {
  return (
    
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
       <h1> <div className='h1'>Offers For You</div></h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
     < div className="background">
        <img src={exclusive_img4} />
     </div>
     </div>
  )
}

export default Offers
