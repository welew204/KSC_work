import React from 'react';
import './Inventory.css';

import Wheat from '../Wheat/Wheat.js';
import Stew from '../Stew/Stew.js';
import Fish from '../Fish/Fish.js';

function Inventory() {
  return (
    <div className="Inventory">
      <h1>Inventory</h1>
      <Wheat />
      <Stew />
      <Fish />
    </div>
  );
}

export default Inventory;
