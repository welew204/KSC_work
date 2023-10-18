import React from "react";
import "./Inventory.css";
import Fish from "../Fish/Fish";
import Stew from "../Stew/Stew";
import Wheat from "../Wheat/Wheat";

function Inventory() {
  return (
    <div className='Inventory'>
      <h1>Inventory</h1>
      <Stew />
      <Fish />
      <Wheat />
    </div>
  );
}

export default Inventory;
