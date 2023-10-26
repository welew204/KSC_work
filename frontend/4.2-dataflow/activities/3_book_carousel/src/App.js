import React, { useEffect, useState } from "react";
import "./App.css";

import BoxSelector from "./components/BoxSelector/BoxSelector.js";
import BookInfo from "./components/BookInfo/BookInfo.js";

function App() {
  const [bookData, setBookData] = useState({});
  const [selectedBook, setSelectedBook] = useState("Frankenstein");

  function doFetch() {
    // Look in "public" for this JSON file
    fetch("./data/book_information.json")
      .then((response) => response.json())
      .then((data) => {
        // Got data back, console log the data we received
        console.log("Fetch successful!");
        console.log("Data received:", data);

        // Do a setState to update the bookData object
        setBookData(data);
      });
  }

  function changeBookSelection(newBookSelection) {
    // TODO HINTS:
    console.log("Got clicked:", newBookSelection);
    setSelectedBook(newBookSelection); // <-- will need to define this
  }

  useEffect(doFetch, []);

  console.log("Getting rendered!");

  return (
    <div className='App'>
      <h1>Early Science Fiction Books</h1>

      {Object.entries(bookData).map(([name, info]) =>
        name === selectedBook ? (
          <BookInfo
            title={name}
            key={name}
            author={info.author}
            release={info.releaseDate}
            coverImage={info.cover}
          />
        ) : (
          void 0
        )
      )}

      <BoxSelector
        choices={Object.keys(bookData)}
        onSelectionChange={changeBookSelection}
        selectedValue={selectedBook}
      />
    </div>
  );
}

export default App;
