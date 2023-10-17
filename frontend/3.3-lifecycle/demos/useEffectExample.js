import React, { useState, useEffect } from 'react';

function App() {

  const [username, setUsername] = useState('janeqhacker');
  const [results, setResults] = useState({});

  function getData() {
    fetch("https://api.github.com/users/janeqhacker/repos")
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        setResults(results);
      });
  }

  // Invokes right away. Typically used to go to APIs to get data to display.
  // In this case, fetching a repo list from GitHub.
  useEffect(getData, []);


  // Invokes after every time a variable's value changes (such as a state
  // variable). Useful for things like "search as you type".
  useEffect(getData, [username]);


  // Invokes after every time the app gets re-rendered. Occasionally useful.
  useEffect(getData);


  // Also: Can also be combined with anonymous arrow function syntax to supply
  // code right away (instead of using a function name)
  useEffect(() => {
    console.log('And the days go by');
    console.log('Like a strand in the wind');
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">GitHub Profile Search</h1>
      </header>
      <div className="Form">
        <input placeholder="Enter your GitHub username" value={username}
            onChange={ev => setUsername(ev.target.value)} />
        <h2>URL: github.com/{username || '...'}/</h2>
        <button onClick={getData}>Submit</button>
        {
          results.map((item, index) => (
            <div key={index}>
              <hr /> <h2>{item.name}</h2> <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

