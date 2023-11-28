import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './reset.css';
import './App.css';

import Browse from './components/pages/Browse/Browse.js';
import ViewSinglePost from './components/pages/ViewSinglePost/ViewSinglePost.js';
import CreatePost from './components/pages/CreatePost/CreatePost.js';
import AvatarManagement from './components/pages/AvatarManagement/AvatarManagement.js';

function App() {
  return (
    <div className="App">
      <div className="App-navigationWrapper">
        <div className="App-navigation">
          <div>
            <Link to="/">
              <img src="https://i.imgur.com/2cVFU6o.png" alt="Instagrim" className="App-logo" />
              <img src="https://i.imgur.com/6rGrZfZ.png" alt="Instagrim" className="App-logo" />
            </Link>
          </div>
          <div className="App-navLinks">
            <Link to="/">Browse</Link>
            <Link to="/create/">Create</Link>
            <Link to="/avatars/">Avatars</Link>
          </div>
        </div>
      </div>

      <div className="App-mainContent">

        <Switch>
          <Route exact path='/' component={Browse} />
          <Route exact path='/create/' component={CreatePost} />
          <Route path='/view/:id/' component={ViewSinglePost} />
          <Route path='/avatars/' component={AvatarManagement} />
        </Switch>

      </div>
    </div>
  );
}

export default App;
