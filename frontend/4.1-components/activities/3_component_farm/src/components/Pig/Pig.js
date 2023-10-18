import React from 'react';
import './Pig.css';
import pigImage from './pigsprite.png';

function Pig() {
  return (
    <div className="Pig">
      <img src={pigImage} alt="pig" />
    </div>
  );
}

export default Pig;
