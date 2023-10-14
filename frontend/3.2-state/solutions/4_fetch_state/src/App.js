import React, { useState } from 'react';
import './App.css';

let previousTimeout = null;

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [results, setResults] = useState([]);

  function onUsernameChange(ev){
    let value = ev.target.value;
    setUsername(value);

    debouncedOnSearch(value); // Bonus Challenge: Debounced search
  }

  function onSubmit() {
    console.log('Getting clicked!', username);

    ///////////////////////////////////
    // Bonus Challenge solution, debounced onSubmit
    let user = arguments[0] || username;
    // (Also replaced the following line to use user:)
    //fetch(`https://api.github.com/users/${username}/repos`)
    ///////////////////////////////////

    setIsLoading(true);

    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(data => {

        // Check for errors:
        if (data.message ===  "Not Found") {
          setResults([]);
          setIsLoading(false);
          return;
        }

        console.log('data', data);
        setResults(data);
        setIsLoading(false);
      });
  }

  ///////////////////////////////////
  function debouncedOnSearch(newUsername) {
    // Bonus Challenge: Debounced onSubmit
    // Create a new timeout with a 0.5s delay. If there was a previous timeout,
    // clear it first to prevent double-firing.
    console.log('the username is', newUsername);
    clearTimeout(previousTimeout);
    previousTimeout = setTimeout(() => {
      onSubmit(newUsername);
    }, 0.5 * 1000);
  }
  ///////////////////////////////////

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/IGjUDRd.png" alt="octo" />
        <h1 className="App-title">GitHub Profile Search</h1>
      </header>
      <div className="Form">

        <input
          placeholder="Enter your GitHub username"
          value={username}
          onChange={onUsernameChange}
        />
        <h2>
          {
            username ? (
              <a href={'http://github.com/' + username + '/'}
                target="_blank" rel="noopener noreferrer">
                URL: github.com/{username || '...'}/
              </a>
            ) : (
              '...'
            )
          }
        </h2>

        <button onClick={() => onSubmit()}>Submit</button>


        <p>{results.length === 0 ? 'No results.' : ''}</p>

        {
          results.map((item, index) => (
            <div key={index}>
              <hr />
              <h2>{item.name}</h2>
              <p>{item.description}</p>

            </div>
          ))
        }

        {
          isLoading ? (
            <img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loading" />
          ) : null
        }
      </div>
    </div>
  );
}

export default App;
