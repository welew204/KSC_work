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

        <StatuePanel title="First title" />

        <StatuePanel title="Another title" />

        <StatuePanel title="Third thing">
          <p>This will be accessible as props.children</p>
        </StatuePanel>

      </div>
    </div>
  );
}

export default App;
