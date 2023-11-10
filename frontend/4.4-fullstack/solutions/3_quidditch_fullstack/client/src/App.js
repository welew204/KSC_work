import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import Character from './components/Character/Character.js';

function App() {

  // Define "pool" of available characters
  const [availableChasers, setAvailableChasers] = useState([]);
  const [availableBeaters, setAvailableBeaters] = useState([]);
  const [availableKeepers, setAvailableKeepers] = useState([]);
  const [availableSeekers, setAvailableSeekers] = useState([]);

  // Define which ones we'll be using for this team
  const [chosenChasers, setChosenChasers] = useState([]);
  const [chosenBeaters, setChosenBeaters] = useState([]);

  // There is only one keeper and one seeker per team
  const [chosenKeeper, setChosenKeeper] = useState(null);
  const [chosenSeeker, setChosenSeeker] = useState(null);


  function refreshData () {
    fetch('/api/get/chosen/')
      .then(response => response.json())
      .then(data => {
        console.log('chosen - this is data', data);
        setChosenChasers(data.chasers);
        setChosenBeaters(data.beaters);
        setChosenSeeker(data.seekers[0]);
        setChosenKeeper(data.keepers[0]);
      });

    fetch('/api/get/available/')
      .then(response => response.json())
      .then(data => {
        console.log('available - this is data', data);
        setAvailableChasers(data.chasers);
        setAvailableBeaters(data.beaters);
        setAvailableKeepers(data.keepers);
        setAvailableSeekers(data.seekers);
      });
  }

  function chooseCharacter(availableArray, index) {
    const chosen = availableArray[index];
    const name = chosen.name;
    fetch('/api/choose/' + name + '/', {method: 'POST'})
      .then(response => response.json())
      .then(data => {
        refreshData();
      });
  }

  function onChooseKeeper(index) {
    // Refactored into a "chooseCharacter" function
    chooseCharacter(availableKeepers, index);
  }

  function onChooseSeeker(index) {
    chooseCharacter(availableSeekers, index);
  }

  function onChooseChaser(index) {
    chooseCharacter(availableChasers, index);
  }

  function onChooseBeater(index) {
    chooseCharacter(availableBeaters, index);
  }

  // Run it after the first load
  useEffect(refreshData, []);

  return (
    <div className="App">
      <Nav />
      <div className="TeamManager">
        <div className="TeamManager-position">
          <h2>Starting Keeper</h2>
          <Character info={chosenKeeper} />
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
          <Character info={chosenSeeker} />
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
              <Character key={character.name} info={character} />
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
              <Character key={character.name} info={character} />
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
