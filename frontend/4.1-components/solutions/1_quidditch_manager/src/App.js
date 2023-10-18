import React, { useState } from 'react';
import './App.css';

// Pull in player data from the players JSON file
import players from './players.json';

// Uses filter to narrow down array into 4 individual player arrays, one for
// each of the 4 Quidditch positions
const chaserPlayers = players.filter(p => p.position === 'Chaser');
const beaterPlayers = players.filter(p => p.position === 'Beater');
const keeperPlayers = players.filter(p => p.position === 'Keeper');
const seekerPlayers = players.filter(p => p.position === 'Seeker');

function App() {

  // Define "pool" of available characters
  const [availableChasers, setAvailableChasers] = useState(chaserPlayers);
  const [availableBeaters, setAvailableBeaters] = useState(beaterPlayers);

  // NOTE: In this solution, we actually never remove keepers or seekers from
  // the list of available ones.  This means we have no need of making these
  // actually real state variables.  To avoid the warnings that accompany
  // creating state variables that you never modify, we'll just set them as
  // normal variables (gosh darn it, you win again React linter warnings!)
  // const [availableKeepers, setAvailableKeepers] = useState(keeperPlayers);
  // const [availableSeekers, setAvailableSeekers] = useState(seekerPlayers);
  const availableKeepers = keeperPlayers;
  const availableSeekers = seekerPlayers;

  // Define which ones we'll be using for this team
  const [chosenChasers, setChosenChasers] = useState([]);
  const [chosenBeaters, setChosenBeaters] = useState([]);

  // There is only one keeper and one seeker per team
  const [chosenKeeper, setChosenKeeper] = useState(null);
  const [chosenSeeker, setChosenSeeker] = useState(null);

  function onChooseKeeper(index) {
    // When they click on a "chosen" keeper, get the keeper that we want
    // to use with the index provided, then do a setState
    const desiredKeeper = availableKeepers[index];
    setChosenKeeper(desiredKeeper);
  }

  function removeKeeper() {
    setChosenKeeper(null); // Clear the chosen keeper
  }

  function onChooseSeeker(index) {
    setChosenSeeker(availableSeekers[index]);
  }

  function removeSeeker() {
    setChosenSeeker(null); // Clear the chosen seeker
  }

  function onChooseChaser(index) {
    // Get the chosen chaser, and add to the end
    const character = availableChasers[index];
    setChosenChasers([
      ...chosenChasers, // include existing chasers
      character, // and the new one
    ]);

    // Remove the item at index from the array
    setAvailableChasers([
      ...availableChasers.slice(0, index), // include up to index
      ...availableChasers.slice(index + 1), // and after index
    ]);
  }

  function removeChaser(index) {
    // Get the chaser and add to the end of available
    const character = chosenChasers[index];
    setAvailableChasers([
      ...availableChasers, // include existing characters
      character,           // and the new one
    ]);

    // Remove the item at index from the array
    setChosenChasers([
      ...chosenChasers.slice(0, index),  // include up to index
      ...chosenChasers.slice(index + 1), // and after index
    ]);
  }


  function onChooseBeater(index) {
    // Get the chosen chaser, and add to the end
    const character = availableBeaters[index];
    setChosenBeaters([
      ...chosenBeaters, // include existing chasers
      character,        // and the new one
    ]);

    // Remove the item at index from the array
    setAvailableBeaters([
      ...availableBeaters.slice(0, index),  // include up to index
      ...availableBeaters.slice(index + 1), // and after index
    ]);
  }

  function removeBeater(index) {
    // Get the beater and add to the end of available
    const character = chosenBeaters[index];
    setAvailableBeaters([
      ...availableBeaters, // include existing characters
      character,           // and the new one
    ]);

    // Remove the item at index from the array
    setChosenBeaters([
      ...chosenBeaters.slice(0, index),  // include up to index
      ...chosenBeaters.slice(index + 1), // and after index
    ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/NrJQBLb.png" alt="snitch" />
        <h1 className="App-title">Quidditch Manager</h1>
      </header>
      <div className="TeamManager">
        <div className="TeamManager-position">
          <h2>Starting Keeper</h2>
          {
            chosenKeeper ? (
              <div className="TeamManager-character">
                <h3>{chosenKeeper.name}</h3>
                <h4>{chosenKeeper.house}</h4>
                <button onClick={removeKeeper}>Remove</button>
              </div>
            ) : (
              <em>None selected</em>
            )
          }
        </div>

        <div className="TeamManager-position">
          <h2>Roster (Keepers)</h2>
          {
            availableKeepers.map((character, index) => (
              <div className="TeamManager-character" key={index}>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button onClick={() => onChooseKeeper(index)}>Choose</button>
              </div>
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Starting Seeker</h2>
          {
            chosenSeeker ? (
              <div className="TeamManager-character">
                <h3>{chosenSeeker.name}</h3>
                <h4>{chosenSeeker.house}</h4>
                <button onClick={removeSeeker}>Remove</button>
              </div>
            ) : (
              <em>None selected</em>
            )
          }
        </div>

        <div className="TeamManager-position">
          <h2>Roster (Seekers)</h2>
          {
            availableSeekers.map((character, index) => (
              <div className="TeamManager-character" key={index}>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button onClick={() => onChooseSeeker(index)}>Choose</button>
              </div>
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Starting Chasers</h2>
          {
            chosenChasers.map((character, index) => (
              <div className="TeamManager-character" key={index}>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button onClick={() => removeChaser(index)}>Remove</button>
              </div>
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Roster (Chasers)</h2>
          {
            availableChasers.map((character, index) => (
              <div className="TeamManager-character" key={index}>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button onClick={() => onChooseChaser(index)}>Choose</button>
              </div>
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Starting Beaters</h2>
          {
            chosenBeaters.map((character, index) => (
              <div className="TeamManager-character" key={index}>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button onClick={() => removeBeater(index)}>Remove</button>
              </div>
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Roster (Beaters)</h2>
          {
            availableBeaters.map((character, index) => (
              <div className="TeamManager-character" key={index}>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button onClick={() => onChooseBeater(index)}>Choose</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
