import React, { useState, useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav.js";
import Character from "./components/Character/Character.js";

// TODO, Remove this stuff entirely, instead utilize the refreshData function
/* import players from "./players.json";
const chaserPlayers = players.filter((p) => p.position === "Chaser");
const beaterPlayers = players.filter((p) => p.position === "Beater");
const keeperPlayers = players.filter((p) => p.position === "Keeper");
const seekerPlayers = players.filter((p) => p.position === "Seeker"); */

// Define our App
function App() {
  // Define "pool" of available characters
  // TODO: After you remove the above, make all these default as []
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

  function refreshChosen() {
    fetch("/api/get/chosen/")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is chosen data", data);
        setChosenBeaters(data.beaters);
        setChosenChasers(data.chasers);
        setChosenKeeper(data.keepers?.at(0));
        setChosenSeeker(data.seekers?.at(0));
        // TODO, need to do some state setting for all "chosen" state variables
      });
  }

  function refreshAvailable() {
    fetch("/api/get/available/")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is available data", data);
        setAvailableBeaters(data.beaters);
        setAvailableChasers(data.chasers);
        setAvailableKeepers(data.keepers);
        setAvailableSeekers(data.seekers);
        // TODO, need to do some state setting for all "chosen" state variables
      });
  }

  function refreshData() {
    console.log("Refreshing both available and chosen...");
    refreshAvailable();
    refreshChosen();
  }

  function onChooseKeeper(index) {
    const chosen = availableKeepers[index];
    const name = chosen.name;
    fetch("/api/choose/" + name + "/", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        refreshData();
      });
  }

  function onChooseSeeker(index) {
    const chosen = availableSeekers[index];
    const name = chosen.name;
    fetch("/api/choose/" + name + "/", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        refreshData();
      });
  }

  function onChooseChaser(index) {
    // TODO instead do API call then refreshData
    const chosen = availableChasers[index];
    const name = chosen.name;
    fetch("/api/choose/" + name + "/", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        refreshData();
      });
  }

  function onChooseBeater(index) {
    // TODO instead do API call then refreshData
    const chosen = availableBeaters[index];
    const name = chosen.name;
    fetch("/api/choose/" + name + "/", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        refreshData();
      });
  }

  useEffect(refreshData, []);

  return (
    <div className='App'>
      <Nav />
      <div className='TeamManager'>
        <div className='TeamManager-position'>
          <h2>Starting Keeper</h2>
          <Character
            info={chosenKeeper}
            onButtonClick={() => console.log("Not removing keeper...")}
            buttonText={"Remove"}
          />
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Keepers)</h2>
          {availableKeepers.map((character, index) => (
            <Character
              key={character.name}
              info={character}
              onButtonClick={() => onChooseKeeper(index)}
            />
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Seeker</h2>
          <Character
            info={chosenSeeker}
            onButtonClick={() => console.log("Not removing seeker...")}
            buttonText={"Remove"}
          />
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Seekers)</h2>
          {availableSeekers.map((character, index) => (
            <Character
              key={character.name}
              info={character}
              onButtonClick={() => onChooseSeeker(index)}
            />
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Chasers</h2>
          {chosenChasers.map((character, index) => (
            <Character
              key={character.name}
              info={character}
              onButtonClick={() => console.log("Not removing ...", index)}
              buttonText={"Remove"}
            />
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Chasers)</h2>
          {availableChasers.map((character, index) => (
            <Character
              key={character.name}
              info={character}
              onButtonClick={() => onChooseChaser(index)}
            />
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Starting Beaters</h2>
          {chosenBeaters.map((character, index) => (
            <Character
              key={character.name}
              info={character}
              onButtonClick={() => console.log("Not removing ...", index)}
              buttonText={"Remove"}
            />
          ))}
        </div>

        <div className='TeamManager-position'>
          <h2>Roster (Beaters)</h2>
          {availableBeaters.map((character, index) => (
            <Character
              key={character.name}
              info={character}
              onButtonClick={() => onChooseBeater(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
