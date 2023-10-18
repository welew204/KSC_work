import React, { useState } from 'react';
import './Pig.css';
import pigImage from './pigsprite.png';

function Pig() {
  const [count, setCount] = useState(0);

  function getFed() {
    setCount(count + 1);
  }

  return (
    <div className="Pig">
      <img src={pigImage} alt="pig" />
      <button onClick={getFed}>
        Feed me x{count}
      </button>
    </div>
  );
}

export default Pig;
