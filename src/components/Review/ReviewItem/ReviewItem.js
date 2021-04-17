import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
  console.log(props);
  const{description,quantity,key,price}=props.product;
  return (
    <div className="review-item">
      <h4 className="product-name">{description}</h4>
      <h4>price:${price}</h4><br/>
      <button  className="main-button"
      onClick={()=>props.removeProduct(key)}
      >Remove</button>
      
    </div>
  );
};

export default ReviewItem;