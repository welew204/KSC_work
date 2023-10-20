import React from 'react';
import './Calculator.css';

import Button from '../Button/Button.js';

function Calculator(props) {

  function onDigitClicked(value) {
    if (props.nextClear) {
      // If we had just entered an operation, then this press should clear the
      // screen for a new number
      props.onChangeNumber(value);
    } else {
      // Otherwise, the new digit "accumulates" with the previous digits for a
      // longer number
      const newNumber = String(props.numberDisplay) + value;
      props.onChangeNumber(newNumber);
    }
  }

  return (
    <div className="Calculator">
      {/*
        <div className="Calculator-currentOperation">
          {props.operation}
        </div>
      */}
      <div className="Calculator-display">
        {Math.round((props.numberDisplay || 0) * 1000) / 1000}
      </div>
      {/*
        <div className="Calculator-extraOperations">
          <Button onClick={() => props.onSetOperation('todo')} type="green">exp</Button>
          <Button onClick={() => props.onSetOperation('todo')} type="green">%</Button>
          <Button onClick={() => props.onSetOperation('todo')} type="green">CE</Button>
        </div>
      */}
      {/*
        For a "clear button", use code something like this:
        function clearAll() {
          props.onChangeNumber('');
          props.onSetOperation(null);
        }
      <div className="Calculator-extraOperations">
          <Button onClick={clearAll} type="green">Clear</Button>
      </div>
      */}
      <div className="Calculator-keypad">
        <Button onClick={() => onDigitClicked('9')}>9</Button>
        <Button onClick={() => onDigitClicked('8')}>8</Button>
        <Button onClick={() => onDigitClicked('7')}>7</Button>
        <Button onClick={() => onDigitClicked('6')}>6</Button>
        <Button onClick={() => onDigitClicked('5')}>5</Button>
        <Button onClick={() => onDigitClicked('4')}>4</Button>
        <Button onClick={() => onDigitClicked('3')}>3</Button>
        <Button onClick={() => onDigitClicked('2')}>2</Button>
        <Button onClick={() => onDigitClicked('1')}>1</Button>
        <Button onClick={() => onDigitClicked('0')}>0</Button>
        <Button onClick={() => props.onSetOperation('equals')} type="red">=</Button>
        <Button onClick={() => onDigitClicked('.')} type="red">.</Button>
      </div>
      <div className="Calculator-operations">
        <Button onClick={() => props.onSetOperation('divide')} type="yellow">÷</Button>
        <Button onClick={() => props.onSetOperation('multiply')} type="yellow">×</Button>
        <Button onClick={() => props.onSetOperation('subtract')} type="yellow">-</Button>
        <Button onClick={() => props.onSetOperation('add')} type="yellow">+</Button>
      </div>
    </div>
  );
}

export default Calculator;
