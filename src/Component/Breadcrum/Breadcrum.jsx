import React from 'react';
import '../../Component/Breadcrum/Breadcrum.css';
import arrow_icon from '../../assets/arrow_icon.jpeg';

const Breadcrum = (props) => {
    const { product } = props;

    // Check if product exists before accessing its properties
    if (!product) {
        return null; // Render nothing if product is undefined
    }

    return (
        <div className='breadcrum'>
            
                HOME <img src={arrow_icon} alt="" />
                SHOP <img src={arrow_icon} alt="" />
                {product.Category} <img src={arrow_icon} alt="" /> {product.name}
        
        </div>
    );
}

export default Breadcrum;