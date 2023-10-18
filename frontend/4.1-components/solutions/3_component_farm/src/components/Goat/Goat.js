import React from 'react';
import './Goat.css';
import goatImage from './goat.png';

function Goat() {
  return (
    <div className="Goat">
      <img src={goatImage} alt="Goat" />
    </div>
  );
}

export default Goat;
