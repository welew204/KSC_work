import React from "react";
import "./Button.css";

// HINT: Try {props.children}

const Button = (props) => (
  <div onClick={props.onClick} className='Button'>
    {props.children}
  </div>
);

export default Button;
