import React from 'react';
import img from '../../images/medichine.webp'
import './Information.css'

const Information = () => {
  return (
    <div class="full_div">
        <div className="header" >
          <h1><span className="text-color">For your safety, we require a <br></br>prescription for non-OTC medicine.</span></h1>
        </div>
        <div><img className="img" src={img} alt=""/></div>
      </div>  
  );
};

export default Information;