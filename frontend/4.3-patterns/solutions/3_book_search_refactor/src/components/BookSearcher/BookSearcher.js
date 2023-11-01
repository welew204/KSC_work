import React, { useState, useEffect } from 'react';

import Paginator from '../Paginator/Paginator.js';
import SearchBox from '../SearchBox/SearchBox.js';
import './BookSearcher.css';

const PAGE_SIZE = 10;

function BookSearcher(props) {
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('the lord of the rings');
  const [page, setPage] = useState(0);

  function getURL() {
    // This function is for generating the API's URL based on the state.
    // Create an array of all the principle parts of the URL, and then join the
    // array together. This style of creating the string is just to make the
    // function more legible, instead of being 1 super long line.
    return [
      'http://openlibrary.org/search.json?q=',
      query.replace(/\W+/g, '+'),
      '&limit=',
      PAGE_SIZE,
      '&offset=',
      PAGE_SIZE * (page || 0),
    ].join('');
  }

  /*
    doFetch will do the fetch to the API based on state, updating the state with
    the books retrieved.
  */
  function doFetch() {
    const url = getURL();
    console.log('making query to ', url);
    props.onSearchStart();
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Calculate the total pages, based on the page size and the number of
        // results
        setTotalPages(Math.ceil(data.numFound / PAGE_SIZE));
        console.log('data', data);

        // Set the state of the new information, notably the total number of
        // pages, and the array of data we got back
        props.onBookListUpdated(data.docs);
      });
  }

  /*
    onSearch is called when the Search button is clicked
  */
  function onSearch() {
    if (page === 0) {
      doFetch(); // No need to reset the page, so lets just do the fetch
    } else {
      setPage(0); // Reset the page to 0, which will in turn cause a fetch
    }
  }

  function onQueryChange(ev) {
    setQuery(ev.target.value);
  }

  function decrementPage() {
    if (page <= 0) {
      return; // don't do anything
    }
    setPage(page - 1);
  }

  function incrementPage() {
    if (page >= totalPages) {
      return; // don't do anything
    }
    setPage(page + 1);
  }

  // This will cause data to be fetched 1) when we first load, and 2) any time
  // the page variable gets changed
  useEffect(doFetch, [page]);
  return (
    <div className="BookSearcher">
      <SearchBox
        onQueryChange={onQueryChange}
        onSearch={onSearch}
        query={query} />
      <Paginator
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        page={page}
        totalPages={totalPages} />
    </div>
  );
}

export default BookSearcher;
