import React, { useState } from "react";
import "./App.css";

import Calculator from "./components/Calculator/Calculator.js";

function App() {
  const [currentNum, setCurrentNum] = useState("");
  const [heldNum, setHeldNum] = useState("");
  const [activeOperator, setActiveOperator] = useState("");
  console.log("Active heldNum... ", heldNum);
  console.log("Active operator... ", activeOperator);

  function clickNumber(val) {
    if (val === ".") {
      if (currentNum.includes(val)) {
        return;
      }
    }
    setCurrentNum((p) => p.concat(val));
  }

  function calcTotal() {
    let newHeld = 0.0;
    //console.log(activeOperator);
    if (activeOperator === "+") {
      //console.log("ding!");
      newHeld = parseFloat(heldNum) + parseFloat(currentNum);
    } else if (activeOperator === "-") {
      newHeld = parseFloat(heldNum) - parseFloat(currentNum);
    } else if (activeOperator === "×") {
      newHeld = parseFloat(heldNum) * parseFloat(currentNum);
    } else if (activeOperator === "÷") {
      newHeld = parseFloat(heldNum) / parseFloat(currentNum);
    }
    console.log("new heldNum...", newHeld);
    return newHeld;
  }

  function handleEqual() {
    if (!heldNum) {
      setActiveOperator("");
      return;
    }
    let newVal = calcTotal();
    setCurrentNum(newVal.toString());
    setHeldNum("");
    setActiveOperator("");
  }

  function clickOperator(val) {
    if (heldNum !== "") {
      console.log("calc'ing new heldNum!");
      let newVal = calcTotal();
      setHeldNum(newVal.toString());
    } else if (currentNum) {
      setHeldNum(currentNum);
    }
    setCurrentNum("");
    //console.log(val);
    setActiveOperator(val);
  }
  /*
    TODO: Will need to add new methods to implement clicking on numbers and
    other events.
  */

  return (
    <div className='App'>
      {/* TODO: Will need to replace the event here,
          to add the number to the state... */}
      <Calculator
        handleNumPress={(event) => clickNumber(event.target.innerHTML)}
        handleOperator={(event) => clickOperator(event.target.innerHTML)}
        handleEqual={handleEqual}
        number={currentNum}
      />
    </div>
  );
}

export default App;
