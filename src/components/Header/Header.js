import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
  const[loggedInUser,setLoggedInUser]=useContext(userContext);

  return (
    <div >
     <div  className="container_sec">
       <div>
        <p className="hedder style">Welcome to online store</p>
       </div>
       <div>
         <h2 className="hedder"> Need Help?01793192906</h2>
       </div>
      <div>
        <h3 className="hedder">Hours:7 days a week from 9.00 am to 7.00 pm</h3>
      </div>    
     </div>
     <div>
       <nav>
         <Link to="/shop">Shop</Link>
         <Link to="/review">Order Review</Link>
         <Link to="/inventory">Manage Inventory</Link>
         <button onClick={()=>setLoggedInUser({})} className="nav_button">Sign Out</button>
         </nav>
     </div>
    </div>
    
  );
};

export default Header;