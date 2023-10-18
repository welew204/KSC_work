import React, { useState } from "react";
import "./App.css";

// Pull in player data from the players JSON file
import players from "./players.json";

// Use filter to narrow down array into 4 individual player arrays, one array
// for each of the 4 Quidditch positions
const chaserPlayers = players.filter((p) => p.position === "Chaser");
const beaterPlayers = players.filter((p) => p.position === "Beater");
const keeperPlayers = players.filter((p) => p.position === "Keeper");
const seekerPlayers = players.filter((p) => p.position === "Seeker");

function App() {
  console.log("running");
  // Define "pool" of available characters
  const [availableChasers, setAvailableChasers] = useState(chaserPlayers);
  const [availableBeaters, setAvailableBeaters] = useState(beaterPlayers);
  const [availableKeepers, setAvailableKeepers] = useState(keeperPlayers);
  const [availableSeekers, setAvailableSeekers] = useState(seekerPlayers);

  // Define which ones we'll be using for this team
  const [chosenChasers, setChosenChasers] = useState([]);
  const [chosenBeaters, setChosenBeaters] = useState([]);

  // There is only one keeper and one seeker per team
  const [chosenKeeper, setChosenKeeper] = useState(null);
  const [chosenSeeker, setChosenSeeker] = useState(null);

  function onChoosePlayer(position, index) {
    // When they click on a "chosen" player, get the player type array, and the index that we want
    // to use with the index provided, then do a setState
    let positionArray;
    let setFunction;
    if (position === "Chaser") {
      positionArray = chaserPlayers;
      setFunction = setChosenChasers;
    } else if (position === "Beater") {
      positionArray = beaterPlayers;
      setFunction = setChosenBeaters;
    } else if (position === "Keeper") {
      positionArray = keeperPlayers;
      setFunction = setChosenKeeper;
    } else if (position === "Seeker") {
      positionArray = seekerPlayers;
      setFunction = setChosenSeeker;
    }
    const desiredPlayer = positionArray[index];
    setFunction(desiredPlayer);
  }

  function removePlayer(position) {
    // Clear the chosen keeper
    let setFunction;
    if (position === "Chaser") {
      setFunction = setChosenChasers;
    } else if (position === "Beater") {
      setFunction = setChosenBeaters;
    } else if (position === "Keeper") {
      setFunction = setChosenKeeper;
    } else if (position === "Seeker") {
      setFunction = setChosenSeeker;
    }
    setFunction(null);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src='https://i.imgur.com/NrJQBLb.png' alt='snitch' />
        <h1 className='App-title'>Quidditch Manager</h1>
      </header>
      <div className='TeamManager'>
        <div className='TeamManager-position'>
          <h2>Starting Keeper</h2>
          {chosenKeeper ? (
            <div className='TeamManager-character'>
              <h3>{chosenKeeper.name}</h3>
              <h4>{chosenKeeper.house}</h4>
              <button onClick={() => removePlayer("Keeper")}>Remove</button>
            </div>
          ) : (
            <em>None selected</em>
          )}
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Keepers)</h2>
          {availableKeepers.map((character, index) => (
            <div className='TeamManager-character'>
              <h3>{character.name}</h3>
              <h4>{character.house}</h4>
              <button onClick={() => onChoosePlayer("Keeper", index)}>
                Choose
              </button>
            </div>
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Seeker</h2>
          {chosenSeeker ? (
            <div className='TeamManager-character'>
              <h3>{chosenSeeker.name}</h3>
              <h4>{chosenSeeker.house}</h4>
              <button onClick={() => removePlayer("Seeker")}>Remove</button>
            </div>
          ) : (
            <em>None selected</em>
          )}
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Seekers)</h2>
          {availableSeekers.map((character, index) => (
            <div className='TeamManager-character'>
              <h3>{character.name}</h3>
              <h4>{character.house}</h4>
              <button onClick={() => onChoosePlayer("Seeker", index)}>
                Choose
              </button>
            </div>
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Chasers</h2>
          <p>TODO</p>
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Chasers)</h2>
          <p>TODO</p>
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Beaters</h2>
          <p>TODO</p>
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Beaters)</h2>
          <p>TODO</p>
        </div>
      </div>
    </div>
  );
}

export default App;
