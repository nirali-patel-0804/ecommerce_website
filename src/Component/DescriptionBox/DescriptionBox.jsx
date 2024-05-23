import React from 'react'
import '../DescriptionBox/DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
       </div>
        <div className="descriptionbox-description">
             <p>Ecommerce is the online exchange of goods and services
             over the internet. It involves online transactions between
             businesses (B2B), businesses and consumers (B2C) as well
             as between consumers and consumers (C2C). Ecommerce
             encompasses a wide range of activities, including electronic
             business, online shopping, online marketplaces, electronic 
             payments, online banking and online auctions.</p>
             <p>Ecommerce stands for “electronic commerce.” Ecommerce 
            websites are built to connect shoppers to products or services
             for trading online. On the most basic level, they provide
              everything we need for online shopping. A business builds the 
              website and lists the products or services they sell, along
               with prices</p>
        </div>
    </div>
  )
}

export default DescriptionBox
