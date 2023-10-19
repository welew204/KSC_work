import React from "react";
import "./Character.css";

function Character(props) {
  return (
    <div className='Character'>
      <h3>{props.name}</h3>
      <h4>{props.house}</h4>
      <button onClick={props.onChooseCharacter}>{props.buttonText}</button>
    </div>
  );
}

export default Character;
