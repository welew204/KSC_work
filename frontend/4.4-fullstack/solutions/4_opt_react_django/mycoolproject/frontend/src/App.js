import {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  function getData() {
    fetch('/api/just/testing/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data from Django!');
        console.log(data);
      });
  }
  useEffect(getData, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
