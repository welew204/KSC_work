import React, { useState, useEffect } from 'react';
import './App.css';

import GenericCarousel from './components/GenericCarousel/GenericCarousel.js';
import BookInfo from './components/BookInfo/BookInfo.js';

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
      <GenericCarousel
        onChange={changeBookSelection}>
        {/* Example use of this carousel with "hard coded" book data: */}
        <BookInfo title="Frankenstein" author="Mary Shelley" />
        <BookInfo title="The Time Machine" author="HG Wells" />
        <p>Email me if you want to join my book club!</p>

        {
          /* Example code to have all books + the paragraph */
          /*
            Object.entries(bookData).map(([name, info]) => (
              <BookInfo
                title={name}
                author={info.author}
                release={info.releaseDate}
                coverImage={info.cover}
              />
            ))
            .concat([
              <p>Email me if you want to join my book club!</p>
            ])
            */
        }
      </GenericCarousel>
    </div>
  );
}

export default App;
