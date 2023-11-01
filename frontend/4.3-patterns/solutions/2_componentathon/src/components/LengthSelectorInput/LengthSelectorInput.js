// Bonus Activity #3

import React, { useState } from 'react';

import './LengthSelectorInput.css';

function LengthSelectorInput () {
  // Create 2 state variables
  const [count, setCount] = useState(10);
  const [text, setText] = useState('');

  // Conditionally add a class based on if the text is too long
  let extraClass = '';
  if (text.length > count) {
    extraClass = 'LengthSelectorInput--tooLong';
  }

  // Render the JSX
  return (
    <div className={"LengthSelectorInput " + extraClass}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div className="LengthSelectorInput-count">
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
}

export default LengthSelectorInput;
