import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import Paginator from "./components/Paginator/Paginator";
import Books from "./components/Books/Books";
import BookSearcher from "./components/BookSearcher/BookSearcher";

const PAGE_SIZE = 10;

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /*
    doFetch will do the fetch to the API based on state, updating the state with
    the books retrieved.
  */
  function doFetch(url) {
    console.log("making query to ", url);
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Calculate the total pages, based on the page size and the number of
        // results

        // Set the state of the new information, notably the total number of
        // pages, and the array of data we got back
        setBooks(data.docs);
        setIsLoading(false);
      });
  }

  /*
    onSearch is called when the Search button is clicked
  */

  // This will cause data to be fetched 1) when we first load, and 2) any time
  // the page variable gets changed

  return (
    <div className='App'>
      <BookSearcher doFetch={doFetch} books={books} />
      <Books books={books} isLoading={isLoading} />
    </div>
  );
}

export default App;
