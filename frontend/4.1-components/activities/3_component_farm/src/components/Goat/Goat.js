import React from "react";
import "./Goat.css";
import goatImage from "./goat.png";

function Goat() {
  return (
    <div className='Goat'>
      <img src={goatImage} alt='goat' />
      <button>Feed me!</button>
    </div>
  );
}

export default Goat;
