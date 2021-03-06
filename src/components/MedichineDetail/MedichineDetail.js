import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const MedichineDetail = () => {
  const {productKey}=useParams();
  const [product, setProduct] =useState({});
  useEffect(() => {
    fetch('http://localhost:4000/product/'+ productKey)
    .then(res => res.json())
    .then(data => setProduct(data));
   },[productKey])

  
  console.log(product);
  return (
    <div>
      <Product showAddToCart={false} product={product}></Product>
     
      
    </div>
  );
};

export default MedichineDetail;