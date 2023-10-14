import React, { useState } from "react";
import "./App.css";

function App() {
  //console.log("shit is happenign");
  const [username, setUsername] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //console.log(results);

  function onUsernameChange(ev) {
    let value = ev.target.value;
    console.log(value);
    setUsername(value);
  }

  function onSubmit() {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((results) => results.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        setResults(data);
      });

    // TODO fill me in
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src='https://i.imgur.com/IGjUDRd.png' alt='octo' />
        <h1 className='App-title'>GitHub Profile Search</h1>
      </header>
      <div className='Form'>
        <input
          placeholder='Enter your GitHub username'
          value={username}
          onChange={onUsernameChange}
        />
        <h2>URL: github.com/{username}/</h2>
        <button onClick={onSubmit}>Submit</button>

        <p>{results.length === 0 ? "No results." : ""}</p>

        {results.map((item) => (
          <div>
            <hr />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}

        {isLoading ? <img src='https://i.imgur.com/OZuoKxH.gif' /> : ""}
      </div>
    </div>
  );
}

export default App;
