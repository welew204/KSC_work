/*
  This is a DRYer refactored version. It uses a generic function to render each
  position. It's a bit more advanced or abstract in its approach, but the code
  is about half the length, and much more DRY. Use this solution as a reference
  for different approaches for refactoring without components, and also look at
  the other activity (involving refactoring with components).
*/

import React, { useState } from 'react';
import './App.css';

// Pull in player data from the players JSON file
import players from './players.json';

function App() {
  // We refactor the state into a single state variable, to make it easier to
  // set / retrieve the different positions.  We'll also store things quite
  // differently: Instead of storing the players themselves, we'll be only
  // storing their indices. This allows for less "moving around" of data, and
  // results in cleaner, DRYer code.  In a more realistic setting, we'd
  // probably want to use an ID from a database instead of an index.
  const [team, setTeam] = useState({
    keepers: [],
    seekers: [],
    beaters: [],
    chasers: [],
  });

  /*
      Adds the given index to the array of players in the given position.
      Parameters: positionName should be like 'keeper' or 'seeker', and index
      should be the player index.
  */
  function addToTeam(positionName, index) {
    const positionNamePlural = positionName + 's';
    const clonedIndices = team[positionNamePlural].slice();
    clonedIndices.push(index);
    setTeam({
      ...team,
      [positionNamePlural]: clonedIndices,
    });
  }

  /*
      Removes the given index from the array of players in the given position.
      Parameters: positionName should be like 'keeper' or 'seeker', and index
      should be the player index
  */
  function removeFromTeam(positionName, index) {
    const positionNamePlural = positionName + 's';
    const clonedIndices = team[positionNamePlural].slice();
    clonedIndices.splice(clonedIndices.indexOf(index), 1);
    setTeam({
      ...team,
      [positionNamePlural]: clonedIndices,
    });
  }

  /*
      Renders the given position as JSX / HTML.
      Parameters: positionName should be like 'keeper' or 'seeker', and limit
      is the maximum selectable for this position.
  */
  function renderPosition(positionName, limit) {
    // Find a few variations on the positionName --- used when accessing
    // the state (e.g. "keeper" becomes "keepers").
    const namePlural = positionName + 's';
    const capfirst = positionName[0].toUpperCase() + positionName.substr(1);
    const capfirstPlural = capfirst + 's';
    const chosenIndices = team[namePlural];

    // This means we have added enough to "max out" this position
    const isMaxed = chosenIndices.length >= limit;

    // Get the relevant roster for this position, by using "filter" to only
    // select the players that have the given position
    const roster = players.filter(p => p.position === capfirst);

    return [ // React only allows "adjacent elements" to be returned in an array
      (
        <div className="TeamManager-position">
          <h2>Starting {limit === 1 ? capfirst : (
            <span>{capfirstPlural} - <small>{chosenIndices.length} / {limit}</small></span>
          )}</h2>
          {
            chosenIndices.length > 0 ? (
              chosenIndices.map(index => (
                <div className="TeamManager-character">
                  <h3>{roster[index].name}</h3>
                  <h4>{roster[index].house}</h4>
                  <button onClick={() => removeFromTeam(positionName, index)}>Remove</button>
                </div>
              ))
            ) : (
              <em>None selected</em>
            )
          }
        </div>
      ), (
        <div className="TeamManager-position">
          <h2>Roster ({capfirstPlural})</h2>
          {
            roster.map((character, index) => (
              <div className="TeamManager-character">
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                {
                  isMaxed || chosenIndices.includes(index) ? (
                    <button disabled>Choose</button>
                  ) : (
                    <button onClick={() => addToTeam(positionName, index)}>Choose</button>
                  )
                }
              </div>
            ))
          }
        </div>
      )
    ];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/NrJQBLb.png" alt="snitch" />
        <h1 className="App-title">Quidditch Manager</h1>
      </header>
      <div className="TeamManager">
        {renderPosition('keeper', 1)}
        {renderPosition('seeker', 1)}
        {renderPosition('chaser', 3)}
        {renderPosition('beater', 2)}
      </div>
    </div>
  );
}

export default App;
