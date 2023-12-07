import React, { Component } from 'react';

import './App.css';

import Pokemon from './components/Pokemon/Pokemon.js';

class App extends Component {
  state = {
    caught: [],
    canCatch: false,
    opposingPokemon: null,
    yourPokemon: null,
  }

  componentDidMount() {
    this.fetchCaught();
    this.fetchRandomOpponent();
  }

  fetchCaught = () => {
    fetch('/api/caught/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          caught: data.results,
        });
      });
  }

  fetchRandomOpponent = (pokemon) => {
    fetch('/api/random/')
      .then(response => response.json())
      .then(data => {
        // Get data back from backend, show enemy pokemon
        const name = data.result.name;
        this.setState({
          opposingPokemon: data.result,
          message: `A wild ${name} appears!`,
          canCatch: false,
        });
      });
  }

  choosePokemon = (pokemon) => {
    this.setState({
      yourPokemon: pokemon,
      message: `${pokemon.name}, I choose you!`,
      canCatch: false,
    });
  }

  attackOpponent = () => {
    // Check if they have not yet chosen a Pokemon
    if (!this.state.yourPokemon) {
      this.setState({
        message: 'You must choose a Pokemon first before you can attack!',
      });
      return;
    }

    const weaknesses = this.state.opposingPokemon.weaknesses;
    const types = this.state.yourPokemon.type;
    console.log('weaknesses:', weaknesses);
    console.log('your type:', types);
    // Check if there is an intersection between weaknesses and type
    for (const type of types) {
      if (weaknesses.includes(type)) {
        // Found a weakness! 
        this.attackSuccessful(type);
        return;
      }
    }

    const name = this.state.yourPokemon.name;

    this.setState({
      message: name + " attacks. It's not very effective...",
      canCatch: false,
    });
  }

  catchPokemon = () => {
    // Send PUT request to mark this pokemon as having been caught
    const name = this.state.opposingPokemon.name;
    const url = '/api/catch/' + name;
    fetch(url, {method: 'PUT'})
      .then(response => response.json())
      .then(data => {
        // After marking as caught, need to refresh caught pokemon, and fetch a
        // new random opponent
        this.fetchCaught();
        this.fetchRandomOpponent();
      });
  }

  attackSuccessful = (type) => {
    this.setState({
      message: `
        ${this.state.yourPokemon.name} attacks with a ${type} move. It's super
        efective! The enemy ${this.state.opposingPokemon.name} faints.
      `,
      canCatch: true,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <img src="https://i.imgur.com/7UWvXR1.png" />
          <h3>Poke Catch - Choose Pokemon strong against each opponent</h3>
        </div>

        <div className="App-sidebar">
          <h1>Roster</h1>
          {
            this.state.caught.map(pokemon => (
              <Pokemon
                data={pokemon}
                onClick={() => this.choosePokemon(pokemon)}
              />
            ))
          }
        </div>
        <div className="App-mainContent">
          <div className="App-poke">
            {
              this.state.yourPokemon ? (
                <Pokemon
                  data={this.state.yourPokemon}
                  isActive={true}
                />
              ) : (
                <div>...</div>
              )
            }
          </div>

          <div className="App-poke">
            {
              this.state.opposingPokemon ? (
                <Pokemon
                  data={this.state.opposingPokemon}
                  isActive={true}
                  onClick={this.attackOpponent}
                  isFeinted={this.state.canCatch}
                />
              ) : (
                <div>...</div>
              )
            }
          </div>
          <div className="App-message">

            {
              this.state.message ? (
                <p>{this.state.message}</p>
              ) : (
                null
              )
            }

            {
              this.state.canCatch ? (
                <button onClick={this.catchPokemon}>
                  <img src="https://i.imgur.com/BTqJABy.png" alt="Pokeball" />
                  Throw a Pokeball!
                </button>
              ) : (
                null
              )
            }


          </div>

        </div>

      </div>
    );
  }
}

export default App;
