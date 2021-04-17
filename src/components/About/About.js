import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import twitter_icon from '../../Icon/Twitter.png'
import facebook_icon from '../../Icon/Facebook.png'
import youtube_icon from '../../Icon/YouTube.png'




const About = () => {
  return (
   <div className="about">
     <div>
       <h2>SHOP</h2>
       
       <Link to="/story" className="link"><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} />Our Story</Link><br/>
       <Link className="link" to="/contact"><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight}></FontAwesomeIcon>Contact Us</Link>

     </div>
     <div>
       <h2>INFORMATION</h2>
       <Link className="link" to="/help"><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} />Help</Link><br/>
       <Link className="link" to="/return"><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} />Returns</Link>
     </div>

     <div>
       <h2>STAY CONNECTED</h2>
       <div className="icon_design">
           <a href="https://twitter.com/?lang=en" target="_blank">
                <img className="social-icon" src={twitter_icon}  alt=""/>           
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <img className="social-icon" src={facebook_icon} alt=""/>           
            </a>
            <a href="https://www.youtube.com/" target="_blank">
                <img className="social-icon" src={youtube_icon} alt="" />           
            </a>
           </div>


     </div>
   </div>
  );
};

export default About;