import React from 'react'
import './Hero.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import  handimg from '../../assets/handimg.webp'
import girl2 from '../../assets/girl2.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      </div>
      <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={handimg}alt='' />
        </div>
        <div className='para1'>
        <div className='p1'>collections</div>
        <div className='p2'>for everyone</div>
        </div>
      </div>
      <div className="hero-latest-btn">
         <div>Latest Collection</div>
         <ArrowForwardIcon />
      </div>
      <div className="hero-right">
        <img src={girl2} alt='' />
      </div>
    </div>
  )
}

export default Hero
