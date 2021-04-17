import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
  
  const {img,description,price,key}=props.product;
  return (
    <div className="product">
      <div>
      <img src={img} alt=""/>
      </div>
      <div className="product-detail">
      <h4 className="product-name"><Link to={"/product/"+key}>{description}</Link></h4>
      <h3>Price:${price}</h3>
      {props.showAddToCart &&<button
      onClick={()=>props.handleAddProduct(props.product)} 
      className="main-button">
        <FontAwesomeIcon icon={faCartPlus} />Add to Cart</button>
      }
      </div>
      
     
      
    </div>
  );
};

export default Product;