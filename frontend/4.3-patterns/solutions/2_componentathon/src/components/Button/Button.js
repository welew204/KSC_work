import React from 'react';
import './Button.css';

const Button = props => (
  <div className="Button" onClick={props.onClick}>
    {props.children}
  </div>
);

export default Button;
