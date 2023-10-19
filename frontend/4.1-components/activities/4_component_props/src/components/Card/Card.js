import React from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card(props) {
  return (
    <div className='Card'>
      <h1 className='Card-title'>{props.title}</h1>
      {props.image ? <img src={props.image} alt='card' /> : null}
      <div className='Card-info'>{props.children}</div>
      {props.buttonText ? (
        <Button onClick={props.onButtonClick}>{props.buttonText}</Button>
      ) : (
        void 0
      )}
    </div>
  );
}

export default Card;
