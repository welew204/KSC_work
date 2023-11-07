import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FieldSet from "../FieldSet/FieldSet";

export default function LengthSelector() {
  const [numAllowed, setNumAllowed] = useState(10);
  const [field, setField] = useState("");

  function handlePMclick(pm) {
    if (pm === "+") {
      setNumAllowed((v) => v + 1);
    } else if (pm === "-" && numAllowed !== 0) {
      setNumAllowed((v) => v - 1);
    }
  }

  function handleFieldSet(text) {
    //console.log(text);
    if (text.length <= numAllowed + 1) {
      setField(text);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor:
          field.length === numAllowed
            ? "yellow"
            : field.length > numAllowed
            ? "red"
            : "white",
      }}>
      <div>
        <Button onClick={() => handlePMclick("-")}>-</Button>
        <p>{numAllowed}</p>
        <Button onClick={() => handlePMclick("+")}>+</Button>
      </div>
      <div>
        <FieldSet
          onChange={(e) => handleFieldSet(e.target.value)}
          value={field}
          legend='Length Limited Input'
        />
      </div>
    </div>
  );
}
