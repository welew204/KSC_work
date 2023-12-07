import React from 'react';
import './Pokemon.css';
function Pokemon() {
  
  return (
    <div className="Pokemon" onClick={props.onClick}>
      <div className="Pokemon-image">
        {
          props.isActive ? (
            <img className="Pokemon--active" src={props.data.img} />
          ) : (
            <img src={props.data.img} />
          )
        }
      </div>
      <p>{props.data.name}</p>
      <p><strong>Type:</strong> {props.data.type.join(', ')}</p>
    </div>
  );
}

export default Pokemon;
