import React, { useState, useEffect } from 'react';
import './App.css';

import MovieDetails from './components/MovieDetails/MovieDetails.js';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  function doFetch() {
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        // console.log('got data back!');
        // console.log(data);
        // TODO... Do something here!
      });
  }

  useEffect(doFetch, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Aye Em Dee Bee</h1>

        <div>
          <input value={searchInput} onChange={ev => setSearchInput(ev.target.value)} />
          <button>Search</button>
        </div>

        <img src="https://i.imgur.com/frWeK97.gif" alt="Aye em dee bee" />

      </header>
      <div className="App-results">

        <MovieDetails
          name="The Shawshank Redemption"
          description="Two imprisoned men bond over a number of years"
          rating="9.3"
          year="1994"
          director="Frank Darabont"
          length="142" />
      </div>

      <div className="App-addMovie">
        {/* Bonus challenge goes here! */}
      </div>
    </div>
  );
}

export default App;
