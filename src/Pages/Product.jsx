import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum.jsx';
import { ShopContext } from '../Component/Context/ShopContext.jsx';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts.jsx'
const Product = () => {
   const { all_product } = useContext(ShopContext);
   const { productId } = useParams();
   const product = all_product.find((e) => e.id === Number(productId));
  
   return (
      <div>
         {product && <Breadcrum product={product} />}
         <ProductDisplay product={product}/>
         <DescriptionBox/>
         <RelatedProducts/>
      </div>
   );
}

export default Product;