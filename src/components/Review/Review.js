import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import { useHistory } from 'react-router';

const Review = () => {
  const[cart,setCart]=useState([]);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const history=useHistory()

  const handleProceedCheckout=()=>{
    
    history.push('/shipment')

  }
  const removeProduct=(productKey)=>{
    
    const newCart=cart.filter(pd=>pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }
  useEffect(()=>{
    //cart
    const savedCart=getDatabaseCart();
   
    const productKeys=Object.keys(savedCart);
   
    fetch('http://localhost:4000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))

  },[])
  
  return (
    <div className="twin-container">
      <div className="product-container">
        {
          cart.map(pd=><ReviewItem 
          removeProduct={removeProduct}
          key={pd.key} 
          product={pd}>
          </ReviewItem>)
       }
     
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
        </Cart>

      </div>
           
    </div>
  );
};

export default Review;