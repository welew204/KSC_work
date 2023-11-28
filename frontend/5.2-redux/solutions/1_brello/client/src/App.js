import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './reset.css';
import './App.css';

import Dashboard from './components/pages/Dashboard/Dashboard.js';
import CreateTask from './components/pages/CreateTask/CreateTask.js';
import EditTask from './components/pages/EditTask/EditTask.js';

import logo from './brello.png';

function App() {
  return (
    <div className="App">
      <div className="App-navigation">
        <img src={logo} alt="brello" />
        <p>Manage your project with Brello - the Abraisive Project Manager!</p>
        <Link to="/">Manage</Link>
        <Link to="/add">Create</Link>
      </div>

      <div className="App-mainContent">

        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/add' component={CreateTask} />
          <Route exact path='/edit/:id/' component={EditTask} />
        </Switch>

      </div>

    </div>
  );
}

export default App;
