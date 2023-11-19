import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import Welcome from './components/pages/Welcome/Welcome.js';
import About from './components/pages/About/About.js';

function App() {

  return (
    <div className="App">
      <div className="App-navigation">
        <h1 className="App-title">Allergy Blog</h1>
        <Link to="/">Welcome</Link>
        <Link to="/about/">About</Link>
      </div>

      <div className="App-mainContent">

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/about/' component={About} />
        </Switch>

      </div>

      <div className="App-sidebar">
        <img src="https://i.imgur.com/9iZAYQu.png" alt="steth" />
        <p>Do you have food allergies? Do you know someone with food
          allergies, or prepare food for people who might have allergies?
          Knowing which allergies to watch out for is essential for keeping
          people healthy and averting possibly life-threatening
          disasters.</p>
      </div>

    </div>
  );
}

export default App;
