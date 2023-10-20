import React, { useState } from 'react';
import './App.css';

import ClickyButton from './components/ClickyButton/ClickyButton.js';

function App () {
  const [homePoints, setHomePoints] = useState(0);
  const [awayPoints, setAwayPoints] = useState(0);

  function homeScored() {
    setHomePoints(homePoints + 1);
  }

  function awayScored() {
    setAwayPoints(awayPoints + 1);
  }

  // This parent component stores the state, but the child component
  // (ClickyButton) is what calls the method that causes the increment.
  // EVERYTHING gets passed down as props, in one direction
  return (
    <div className="App">
      <p>Home: {homePoints}</p>
      <p>Away: {awayPoints}</p>

      <ClickyButton
        text="Home"
        gotClicked={homeScored} />

      <ClickyButton
        text="Away"
        gotClicked={awayScored} />
    </div>
  );
}

export default App;
