import React from "react";
import "./Pig.css";
import pigImage from "./pigsprite.png";

function Pig() {
  const [feedCount, setFeedCount] = React.useState(0);
  return (
    <div className='Pig'>
      <img src={pigImage} alt='pig' />
      <button onClick={() => setFeedCount((p) => p + 1)}>Feed me!</button>
      <em>{`I've been fed ${feedCount} times`}</em>
    </div>
  );
}

export default Pig;
