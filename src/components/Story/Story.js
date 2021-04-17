import React from 'react';
import './Story.css'
import img from '../../images/medichine.webp'

const Story = () => {
  return (
    <div className="story">
     <div>
       <img className="story_img_design"  src={img} alt=""/>

     </div>
     <div className="paragraph_design">
       <p>An online pharmacy, internet pharmacy, or mail-order pharmacy is a pharmacy that operates . International consumers sometimes purchase drugs online from online . online pharmacies come with no guarantees concerning their identity, history, and source. Drug costs are a big point of attraction for online pharmacies.</p>

     </div>
    </div>
  );
};

export default Story;