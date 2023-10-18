import React from 'react';
import './App.css';

import StatuePanel from './components/StatuePanel/StatuePanel.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Components</h1>
      </header>
      <div className="App-library">

        <StatuePanel />
        <StatuePanel />
        <StatuePanel />

      </div>
    </div>
  );
}

export default App;
