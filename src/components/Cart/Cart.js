import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
  const cart=props.cart;
  let total=0;
  for(let i = 0; i< cart.length; i++){
      const product = cart[i];
      
      total = total + product.price ;
  }
  const tax=total/10;
 
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Medichine Ordered:{cart.length}</p>
      <p>Medichine price:{total}</p>
      <p>Tax + Vat:{tax}</p>
      <p>Total Price:{total+tax}</p><br/>
      {
        props.children
      }
      
    </div>
  );
};

export default Cart;