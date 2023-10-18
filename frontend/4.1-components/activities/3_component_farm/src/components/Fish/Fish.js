import React from 'react';
import './Fish.css';
import fishImage from './fish.png';

function Fish() {
  return (
    <div className="Fish">
      <img src={fishImage} alt="fish" />
    </div>
  );
}

export default Fish;
