import React from 'react';
import fakeData from '../../fakeData/fakeData.json'

const Inventory = () => {
  const handleAddProduct=()=>{
    fetch('http://localhost:4000/addMedichine',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(fakeData)
    })

  }
  return (
    <div>
      <button onClick={handleAddProduct}>Add Medichine</button>
      
    </div>
  );
};

export default Inventory;