import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

import Welcome from './components/pages/Welcome/Welcome.js';
import Dolphin from './components/pages/Dolphin/Dolphin.js';
import SpaceCats from './components/pages/SpaceCats/SpaceCats.js';

function App() {
  return (
    <div className="App">
      <h3 className="App-title">Cool Animals</h3>

      <Link to="/">First page</Link>
      <Link to="/dolphins/">Stuff about dolphins</Link>
      <Link to="/space-cats/">Also stuff on cats</Link>

      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/dolphins/' component={Dolphin} />
        <Route exact path='/space-cats/' component={SpaceCats} />
      </Switch>

      <p>Copyright 1997 - All Rights Reserved</p>
    </div>
  );
}

export default App;
