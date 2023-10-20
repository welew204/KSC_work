import React, { useState } from 'react';
import './App.css';

import Calculator from './components/Calculator/Calculator.js';

/*
  Given a left and right operand, and an operation, it actually performs
  the operation requested and returns the result.
*/
function computeValue(operation, leftString, rightString) {
  const left = Number(leftString);
  const right = Number(rightString);
  if (!left) {
    return right;
  }
  if (operation === 'add') {
    return left + right;
  } else if (operation === 'multiply') {
    return left * right;
  } else if (operation === 'subtract') {
    return left - right;
  } else if (operation === 'divide') {
    return left / right;
  } else {
    console.error('Bad operation', operation);
    return NaN;
  }
}

function App() {

  const [currentNum, setCurrentNum] = useState('');
  const [accum, setAccum] = useState('');
  const [addend, setAddend] = useState('');
  const [nextClear, setNextClear] = useState(true);
  const [operation, setOperation] = useState(null);

  function onOperationChange(newOperation) {
    // If this is the first operation set, then we need to set the
    // accumulator and the operation value
    if (!newOperation) {
      setNextClear(true);
      setOperation(newOperation);
      setAccum(currentNum);
      return
    }

    // If the operation is not equals, then set the operation state
    if (newOperation !== 'equals') {
      setOperation(newOperation);

      // If we have just hit an operation, we should just exit now, to
      // avoid "double presses"
      if (nextClear) {
        return;
      }
    }

    // Actually perform operation
    const results = computeValue(operation, accum, addend);

    setNextClear(true);
    setCurrentNum(results);
    setAccum(results);
  }

  function onNumberChange(number) {
    setCurrentNum(number);
    setAddend(number);
    setNextClear(false);
  }

  return (
    <div className="App">
      <Calculator
        numberDisplay={currentNum}
        operation={operation}
        nextClear={nextClear}
        onSetOperation={onOperationChange}
        onChangeNumber={onNumberChange} />
    </div>
  );
}

export default App;
