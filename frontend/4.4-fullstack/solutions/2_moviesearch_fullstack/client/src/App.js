import React, { useState, useEffect } from 'react';
import './App.css';

import MovieDetails from './components/MovieDetails/MovieDetails.js';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBoxText, setSearchBoxText] = useState("");
  const [formData, setFormData] = useState({});

  function onChangeSearchBox(ev) {
    setSearchBoxText(ev.target.value);
  }

  function onGenericFormInputChange(ev) {
    const nameOfInput = ev.target.name;
    const newValueOfInput = ev.target.value;
    setFormData({
      ...formData,
      [nameOfInput]: newValueOfInput,
    });
  }

  function fetchData() {
    setIsLoading(true);
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        console.log('fetchData - Got data back!');
        console.log(data);
        setMovies(data.movies);
        setIsLoading(false);
      });
  }


  function search() {
    fetch('/api/search/' + searchBoxText)
      .then(response => response.json())
      .then(data => {
        console.log('search - Got data back!');
        console.log(data);
        setMovies(data.results);
        setIsLoading(false);
      });

    setSearchBoxText('');
    setIsLoading(true);
  }

  function submit() {
    setIsLoading(true);
    fetch('/api/add/movie', {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => {
        // Successfully POSTed the new data. We'll now invoke fetchData to
        // re-set the state with the new data necessary
        setIsLoading(false);
        fetchData();
      });
  }

  // Invoke fetchData on first load
  useEffect(fetchData, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Aye Em Dee Bee</h1>

        <div>
          <input
            onChange={onChangeSearchBox}
            value={searchBoxText} />
          <button onClick={search}>
            Search
          </button>
        </div>

        <img src="https://i.imgur.com/frWeK97.gif" />

      </header>
      <div className="App-results">
        {
          isLoading ? (
            <strong>Loading...</strong>
          ) : (
            movies.map(movie => (
              <MovieDetails
                key={movie.id}
                name={movie.name}
                details={movie.desc}
                rating={movie.rate}
                year={movie.year}
                director={movie.director}
                length={movie.length} />
            ))
          )
        }
      </div>

      <div className="App-addMovie">

        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={onGenericFormInputChange}
        />

        <label>Details</label>
        <input
          name="details"
          value={formData.details}
          onChange={onGenericFormInputChange}
        />

        <label>Rating</label>
        <input
          name="rating"
          value={formData.rating}
          onChange={onGenericFormInputChange}
        />

        <label>Director</label>
        <input
          name="director"
          value={formData.director}
          onChange={onGenericFormInputChange}
        />

        <label>Year</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={onGenericFormInputChange}
        />

        <label>Length</label>
        <input
          type="number"
          name="length"
          value={formData.length}
          onChange={onGenericFormInputChange}
        />

        <div></div>
        <button onClick={submit}>Add New Movie</button>

      </div>
    </div>
  );
}

export default App;
