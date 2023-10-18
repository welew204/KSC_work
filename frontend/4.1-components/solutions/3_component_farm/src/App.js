import React from 'react';
import './App.css';

import Pig from './components/Pig/Pig.js';
import Goat from './components/Goat/Goat.js';
import Inventory from './components/Inventory/Inventory.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Farm Game</h1>
      </header>
      <div className="App-animals">
        <Pig />
        <Pig />
        <Pig />
        <Goat />
        <Goat />
        <Goat />
      </div>
      <Inventory />
    </div>
  );
}

export default App;
