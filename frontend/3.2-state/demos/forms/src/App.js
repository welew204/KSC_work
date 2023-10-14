import React, { useState } from 'react';
import './App.css';

function App() {

  // State variable:
  const [message, setMessage] = useState('Default value');

  // Function:
  function onMessageChange(ev) {
    const newValue = ev.target.value;
    setMessage(newValue);
  }

  // Rendering:
  return (
    <div className="App">
      <h1 className="App-title">Type a message</h1>
      <input
        placeholder="Type your message"
        onChange={onMessageChange}
      />

      <h1 className="App-title">
        Your message:<br />
        {message}
      </h1>

      {/* OR, in a single line: */}
      {/* onChange={ev => setMessage(ev.target.value)} */}
    </div>
  );
}

export default App;
