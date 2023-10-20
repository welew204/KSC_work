import React, { useState, useEffect } from 'react';
import './App.css';


import BookCarousel from './components/BookCarousel/BookCarousel.js';

function App() {
  const [selectedBook, setSelectedBook] = useState('Frankenstein');
  const [bookData, setBookData] = useState({});

  function doFetch() {
    // Look in "public" for this JSON file
    fetch('./data/book_information.json')
      .then(response => response.json())
      .then(data => {
        // Got data back, console log the data we received
        console.log('Fetch successful!');
        console.log('Data received:', data);

        // Do a setState to update the bookData object
        setBookData(data);
      });
  }

  function changeBookSelection(newBookSelection) {
    console.log('Got clicked:', newBookSelection);
    setSelectedBook(newBookSelection);
  }

  useEffect(doFetch, []);

  return (
    <div className="App">
      <h1>Early Science Fiction Books</h1>
      <BookCarousel
        data={bookData}
        value={selectedBook}
        onChange={changeBookSelection}
      />
    </div>
  );
}

export default App;
