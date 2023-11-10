import React, { useState, useEffect } from "react";
import "./App.css";

import MovieDetails from "./components/MovieDetails/MovieDetails.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [newMovie, setNewMovie] = useState({ title: "", desc: "", year: "" });

  function doFetch() {
    fetch("/api/all")
      .then((response) => response.json())
      .then((data) => {
        // console.log('got data back!');
        console.log(data);
        setMovies(data.movies);
        // TODO... Do something here!
      });
  }
  function addMovie(formData) {
    console.log(formData);
    fetch("/api/add/movie", { method: "POST", body: formData })
      .then((response) => response.json())
      .then((data) => {
        // console.log('got data back!');
        console.log(data);
        // TODO... Do something here!
      });
  }
  function doSearch(term) {
    if (term.length === 0) {
      doFetch();
    } else {
      console.log(term);
      fetch(`api/search/${term}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log('got data back!');
          console.log(data);
          setMovies(data.results);
        });
    }
  }

  useEffect(doFetch, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Aye Em Dee Bee</h1>

        <div>
          <input
            value={searchInput}
            onChange={(ev) => setSearchInput(ev.target.value)}
          />
          <button onClick={() => doSearch(searchInput)}>Search</button>
        </div>

        <img
          //src='https://i.imgur.com/frWeK97.gif'
          // this is returning 403 when requested this way....(works in direct browser call)
          alt='Aye em dee bee'
        />
      </header>
      <div className='App-results'>
        {movies.length != 0 ? (
          movies.map((mv) => {
            return (
              <MovieDetails
                key={mv.id}
                name={mv.name}
                description={mv.desc}
                rating={mv.rate}
                year={mv.year}
                director={mv.director}
                length={mv.length}
              />
            );
          })
        ) : (
          <h1>No titles found....</h1>
        )}
      </div>

      <div
        className='App-addMovie'
        style={{ display: "flex", flexDirection: "column" }}>
        <h2>Add a Movie</h2>
        <div>
          <form action={addMovie}>
            <label for='m_name'>Title:</label>
            <input type='text' name='m_name' id='m_name'></input>
            <label for='year'>Year:</label>
            <input type='text' name='year' id='year'></input>
            <label for='desc'>Description:</label>
            <textarea name='desc' id='desc'></textarea>
            <input type='submit' value='Submit!' />
          </form>
        </div>
        {/* Bonus challenge goes here! */}
      </div>
    </div>
  );
}

export default App;
