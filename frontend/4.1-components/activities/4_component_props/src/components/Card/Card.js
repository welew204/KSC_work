import React from 'react';
import './Card.css';

function Card (props) {
  return (
    <div className="Card">
      <h1 className="Card-title">{props.title}</h1>
      {
        props.image ? (
          <img src={props.image} alt="card" />
        ) : (
          null
        )
      }
      <div className="Card-info">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
