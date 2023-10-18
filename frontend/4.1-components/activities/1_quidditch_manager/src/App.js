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
  console.log(chosenChasers.length);

  // There is only one keeper and one seeker per team
  const [chosenKeeper, setChosenKeeper] = useState(null);
  const [chosenSeeker, setChosenSeeker] = useState(null);

  function onChoosePlayer(position, index) {
    // When they click on a "chosen" player, get the player type array, and the index that we want
    // to use with the index provided, then do a setState
    //console.log(position, index);
    let desiredPlayer;
    let positionArray;
    let setFunction;
    if (position === "Chaser") {
      positionArray = chaserPlayers;
      desiredPlayer = positionArray[index];
      let availInd = availableChasers.indexOf(desiredPlayer);
      let newAvailableChasers = [...availableChasers];

      newAvailableChasers.splice(availInd, 1);
      console.log(newAvailableChasers);
      setChosenChasers([...chosenChasers, desiredPlayer]);
      setAvailableChasers(newAvailableChasers);
      return;
    } else if (position === "Beater") {
      positionArray = beaterPlayers;
      desiredPlayer = positionArray[index];
      let availInd = availableBeaters.indexOf(desiredPlayer);
      let newAvailableBeaters = [...availableBeaters];

      newAvailableBeaters.splice(availInd, 1);
      console.log(newAvailableBeaters);
      setChosenBeaters([...chosenBeaters, desiredPlayer]);
      setAvailableBeaters(newAvailableBeaters);
      return;
    } else if (position === "Keeper") {
      positionArray = keeperPlayers;
      setFunction = setChosenKeeper;
    } else if (position === "Seeker") {
      positionArray = seekerPlayers;
      setFunction = setChosenSeeker;
    }
    desiredPlayer = positionArray[index];
    setFunction(desiredPlayer);
  }

  function removePlayer(position, index = null) {
    // Clear the chosen keeper
    let setFunction;
    if (position === "Chaser") {
      let desiredPlayer = chaserPlayers[index];
      let desiredInd = chosenChasers.indexOf(desiredPlayer);
      let newChosen = [...chosenChasers];
      newChosen.splice(desiredInd, 1);
      let newAvail = [...availableChasers];
      newAvail.push(desiredPlayer);
      setChosenChasers(newChosen);
      setAvailableChasers(newAvail);
      return;
    } else if (position === "Beater") {
      let desiredPlayer = beaterPlayers[index];
      let desiredInd = chosenBeaters.indexOf(desiredPlayer);
      let newChosen = [...chosenBeaters];
      newChosen.splice(desiredInd, 1);
      let newAvail = [...availableBeaters];
      newAvail.push(desiredPlayer);
      setChosenBeaters(newChosen);
      setAvailableBeaters(newAvail);
      return;
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
          {0 < chosenChasers.length ? (
            chosenChasers.map((character) => (
              <div className='TeamManager-character'>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button
                  onClick={() =>
                    removePlayer("Chaser", chaserPlayers.indexOf(character))
                  }>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <em>None selected</em>
          )}
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Chasers)</h2>
          {availableChasers.map((character) => (
            <div className='TeamManager-character'>
              <h3>{character.name}</h3>
              <h4>{character.house}</h4>
              <button
                disabled={chosenChasers.length === 3}
                onClick={() =>
                  onChoosePlayer("Chaser", chaserPlayers.indexOf(character))
                }>
                Choose
              </button>
            </div>
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Beaters</h2>
          {0 < chosenBeaters.length < 3 ? (
            chosenBeaters.map((character) => (
              <div className='TeamManager-character'>
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                <button
                  onClick={() =>
                    removePlayer("Beater", beaterPlayers.indexOf(character))
                  }>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <em>None selected</em>
          )}
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Beaters)</h2>
          {availableBeaters.map((character) => (
            <div className='TeamManager-character'>
              <h3>{character.name}</h3>
              <h4>{character.house}</h4>
              <button
                disabled={chosenBeaters.length === 2}
                onClick={() =>
                  onChoosePlayer("Beater", beaterPlayers.indexOf(character))
                }>
                Choose
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
