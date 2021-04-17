import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import './Shipment.css'

const Shipment = () => {
  const { register, handleSubmit, watch, errors } =useForm();
  const [loggedInUser,setLoggedInUser]=useContext(userContext);
  const onSubmit = data => {
    const savedCart=getDatabaseCart();
    const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()};
    fetch('http://localhost:4000/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          processOrder();
          alert('your order placed successfully');
        }
      })    
  };
  return (
    
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>        
      <input className="form_design" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />      
      {errors.name && <span className="error">Name  is required</span>} 

      <input className="form_design" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email Address"/>      
      {errors.email && <span className="error">Email  is required</span>} 

      <input className="form_design" name="address" ref={register({ required: true })} placeholder="Your Address"/>      
      {errors.name && <span className="error">Address  is required</span>} 

      <input className="form_design" name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />      
      {errors.phone && <span className="error">phone Number  is required</span>}      
      <input className="submit" type="submit" />
    </form>
  );
};

export default Shipment;