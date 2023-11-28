import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import Dashboard from './pages/Dashboard/Dashboard.js';
import CreateTask from './pages/CreateTask/CreateTask.js';

import logo from './brello.png';

function App() {

  return (
    <div className="App">
      <div className="App-navigation">
        <img src={logo} />
        <p>Manage your project with Brello - the Abrasive Project Manager!</p>
        <Link to="/">Manage</Link>
        <Link to="/add">Create</Link>
      </div>

      <div className="App-mainContent">

        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/add' component={CreateTask} />
        </Switch>

      </div>

    </div>
  );
}

export default App;
