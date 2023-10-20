import React, { useState, useEffect } from 'react';
import './App.css';

import BoxSelector from './components/BoxSelector/BoxSelector.js';
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

      {/* Using ? : ternary operator */}
      {
        Object.entries(bookData).map(([name, info]) => (
          name === selectedBook ? (
            <BookInfo
              title={name}
              key={name}
              author={info.author}
              release={info.releaseDate}
              coverImage={info.cover}
            />
          ) : (
            null
          )
        ))
      }


      {/*
      Using ".filter" method:
      {
        Object.entries(bookData)
          .filter(([name, info]) => name === selectedBook)
          .map(([name, info]) => (
              <BookInfo
                title={name}
                key={name}
                author={info.author}
                coverImage={info.cover}
                release={info.releaseDate}
              />
          ))
      }
      */}

      <BoxSelector
        choices={Object.keys(bookData)}
        selectedValue={selectedBook}
        onSelectionChange={changeBookSelection}
      />
    </div>
  );
}

export default App;
