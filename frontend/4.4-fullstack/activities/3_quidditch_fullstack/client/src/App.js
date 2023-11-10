import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import Character from './components/Character/Character.js';

// TODO, Remove this stuff entirely, instead utilize the refreshData function
import players from './players.json';
const chaserPlayers = players.filter(p => p.position === 'Chaser');
const beaterPlayers = players.filter(p => p.position === 'Beater');
const keeperPlayers = players.filter(p => p.position === 'Keeper');
const seekerPlayers = players.filter(p => p.position === 'Seeker');

// Define our App
function App() {
  // Define "pool" of available characters
  // TODO: After you remove the above, make all these default as []
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

  function refreshChosen() {
    fetch('/api/get/chosen/')
      .then(response => response.json())
      .then(data => {
        console.log('this is chosen data', data);
        // TODO, need to do some state setting for all "chosen" state variables
      });
  }

  function refreshAvailable() {
    fetch('/api/get/available/')
      .then(response => response.json())
      .then(data => {
        console.log('this is available data', data);
        // TODO, need to do some state setting for all "chosen" state variables
      });
  }

  function refreshData() {
    console.log('Refreshing both available and chosen...');
    refreshAvailable();
    refreshChosen();
  }


  function onChooseKeeper(index) {
    setChosenKeeper(availableKeepers[index]); // TODO instead do API call then refreshData

    /*
    const chosen = availableKeepers[index];
    const name = chosen.name;
    fetch('/api/choose/' + name + '/', {method: 'POST'})
      .then(response => response.json())
      .then(data => {
        refreshData();
      });
    */
  }

  function removeKeeper() {
    // TODO, Remove this function entirely, along with the corresponding code
    // in the render function entirely... the API now takes care of removing
    // players automatically
    setChosenKeeper(null);
  }

  function onChooseSeeker(index) {
    setChosenSeeker(availableSeekers[index]); // TODO instead do API call then refreshData
  }

  function removeSeeker() {
    // TODO, Remove this function and the corresponding code in the JSX
    // entirely... the API now takes care of removing players automatically
    setChosenSeeker(null);
  }

  function onChooseChaser(index) {
    // TODO instead do API call then refreshData
    const chosenChasersCopy = chosenChasers.slice();
    const availableChasersCopy = availableChasers.slice();
    chosenChasersCopy.push(availableChasersCopy[index]);
    availableChasersCopy.splice(index, 1);
    setChosenChasers(chosenChasersCopy);
    setAvailableChasers(availableChasersCopy);
  }


  function removeChaser(index) {
    // TODO, Remove this function and the corresponding code entirely...  the
    // API now takes care of removing players automatically
    const chosenChasersCopy = chosenChasers.slice();
    const availableChasersCopy = availableChasers.slice();
    availableChasersCopy.push(chosenChasersCopy[index]);
    chosenChasersCopy.splice(index, 1);
    setChosenChasers(chosenChasersCopy);
    setAvailableChasers(availableChasersCopy);
  }


  function onChooseBeater(index) {
    // TODO instead do API call then refreshData
    const chosenBeatersCopy = chosenBeaters.slice();
    const availableBeatersCopy = availableBeaters.slice();
    chosenBeatersCopy.push(availableBeatersCopy[index]);
    availableBeatersCopy.splice(index, 1);
    setChosenBeaters(chosenBeatersCopy);
    setAvailableBeaters(availableBeatersCopy);
  }

  function removeBeater(index) {
    // TODO, Remove this function and the corresponding code in the JSX
    // entirely... the API now takes care of removing players automatically
    const chosenBeatersCopy = chosenBeaters.slice();
    const availableBeatersCopy = availableBeaters.slice();
    availableBeatersCopy.push(chosenBeatersCopy[index]);
    chosenBeatersCopy.splice(index, 1);
    setChosenBeaters(chosenBeatersCopy);
    setAvailableBeaters(availableBeatersCopy);
  }

  useEffect(refreshData, []);

  return (
    <div className="App">
      <Nav />
      <div className="TeamManager">
        <div className="TeamManager-position">
          <h2>Starting Keeper</h2>
          <Character
            info={chosenKeeper}
            onButtonClick={removeKeeper}
            buttonText={"Remove"} />
        </div>

        <div className="TeamManager-position">
          <h2>Roster (Keepers)</h2>
          {
            availableKeepers.map((character, index) => (
              <Character
                key={character.name}
                info={character}
                onButtonClick={() => onChooseKeeper(index)} />
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Starting Seeker</h2>
          <Character
            info={chosenSeeker}
            onButtonClick={removeSeeker}
            buttonText={"Remove"} />
        </div>

        <div className="TeamManager-position">
          <h2>Roster (Seekers)</h2>
          {
            availableSeekers.map((character, index) => (
              <Character
                key={character.name}
                info={character}
                onButtonClick={() => onChooseSeeker(index)} />
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Starting Chasers</h2>
          {
            chosenChasers.map((character, index) => (
              <Character
                key={character.name}
                info={character}
                onButtonClick={() => removeChaser(index)}
                buttonText={"Remove"} />
            ))
          }

        </div>

        <div className="TeamManager-position">
          <h2>Roster (Chasers)</h2>
          {
            availableChasers.map((character, index) => (
              <Character
                key={character.name}
                info={character}
                onButtonClick={() => onChooseChaser(index)} />
            ))
          }
        </div>

        <div className="TeamManager-position">
          <h2>Starting Beaters</h2>
          {
            chosenBeaters.map((character, index) => (
              <Character
                key={character.name}
                info={character}
                onButtonClick={() => removeBeater(index)}
                buttonText={"Remove"} />
            ))
          }

        </div>

        <div className="TeamManager-position">
          <h2>Roster (Beaters)</h2>
          {
            availableBeaters.map((character, index) => (
              <Character
                key={character.name}
                info={character}
                onButtonClick={() => onChooseBeater(index)} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
