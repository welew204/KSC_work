import React, { useState, useEffect} from 'react';

import './App.css';

import Pokemon from './components/Pokemon/Pokemon.js';

function App() {
  const [caught, setCaught] = useState([]);
  const [opposingPokemon, setOpposingPokemon] = useState(null);
  const [yourPokemon, setYourPokemon] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchCaught();
    fetchRandomOpponent();
  });

  function fetchCaught() {
    fetch('/api/caught/')
      .then(response => response.json())
      .then(data => {
        setCaught(
          caught = data.results
        );
      });
  }

  function fetchRandomOpponent(pokemon) {
    fetch('/api/random/')
      .then(response => response.json())
      .then(data => {
        // Get data back from backend, show enemy pokemon
        console.log('got data', data);
        setOpposingPokemon(
          opposingPokemon = data.result
        );
      });
  }

  function choosePokemon(pokemon) {
    setYourPokemon(
      yourPokemon = pokemon
    );
  }

  function attackOpponent() {
    setMessage(
      message = 'You attack... results TBD',
    );
  }

  return (
    <div className="App">
      <div className="App-navigation">
        <img src="https://i.imgur.com/7UWvXR1.png" />
        <h3>Poke Catch - Choose Pokemon strong against each opponent</h3>
      </div>

      <div className="App-sidebar">
        <h1>Roster</h1>
        {
          caught.map(pokemon => (
            <Pokemon
              data={pokemon}
              onClick={() => choosePokemon(pokemon)}
            />
          ))
        }
      </div>
      <div className="App-mainContent">
        <div className="App-poke">
          {
            yourPokemon ? (
              <Pokemon
                data={yourPokemon}
                isActive={true}
              />
            ) : (
              <div>...</div>
            )
          }
        </div>

        <div className="App-poke">
          {
            opposingPokemon ? (
              <Pokemon
                data={opposingPokemon}
                isActive={true}
                onClick={attackOpponent}
              />
            ) : (
              <div>...</div>
            )
          }
        </div>
        <div className="App-message">

          {
            yourPokemon ? null : (
              <p>No Pokemon chosen!</p>
            )
          }

          {
            message ? (
              <p>{message}</p>
            ) : (
              null
            )
          }

          {/*
              <button onClick={catchPokemon}>
                <img src="https://i.imgur.com/BTqJABy.png" alt="Pokeball" />
                Throw a Pokeball!
              </button>
            */}
        </div>

      </div>

    </div>
  );
}

export default App;
