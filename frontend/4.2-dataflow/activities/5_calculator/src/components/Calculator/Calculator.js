import React from "react";
import "./Calculator.css";

import Button from "../Button/Button.js";

function Calculator(props) {
  //console.log();
  return (
    <div className='Calculator'>
      <div className='Calculator-display'>{props.number}</div>
      <div className='Calculator-keypad'>
        {[...Array(10).keys()].reverse().map((val) => (
          <Button onClick={props.handleNumPress}>{val}</Button>
        ))}

        <Button type='red' onClick={props.handleEqual}>
          =
        </Button>
        <Button type='red' onClick={props.handleNumPress}>
          .
        </Button>
      </div>
      <div className='Calculator-operations'>
        <Button type='yellow' onClick={props.handleOperator}>
          ÷
        </Button>
        <Button type='yellow' onClick={props.handleOperator}>
          ×
        </Button>
        <Button type='yellow' onClick={props.handleOperator}>
          -
        </Button>
        <Button type='yellow' onClick={props.handleOperator}>
          +
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
