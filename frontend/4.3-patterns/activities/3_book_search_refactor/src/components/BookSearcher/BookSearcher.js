import React from "react";
import { useEffect, useState } from "react";
import "./BookSearch.css";
import SearchBox from "../SearchBox/SearchBox";
import Paginator from "../Paginator/Paginator";

const PAGE_SIZE = 10;

export default function BookSearcher(props) {
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("The Grasshopper");
  const [page, setPage] = useState(0);

  function getURL() {
    // This function is for generating the API's URL based on the state.
    // Create an array of all the principle parts of the URL, and then join the
    // array together. This style of creating the string is just to make the
    // function more legible, instead of being 1 super long line.
    return [
      "http://openlibrary.org/search.json?q=",
      query.replace(/\W+/g, "+"),
      "&limit=",
      PAGE_SIZE,
      "&offset=",
      PAGE_SIZE * (page || 0),
    ].join("");
  }

  function onSearch() {
    if (page === 0) {
      // No need to reset the page, so lets just do the fetch
      let url = getURL;
      props.doFetch(url);
    } else {
      // Reset the page to 0, which will in turn cause a fetch
      setPage(0);
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

  useEffect(() => {
    let url = getURL();
    props.doFetch(url);
  }, [page]);

  useEffect(() => {
    setTotalPages(Math.ceil(props.books.length / PAGE_SIZE));
    console.log("BOOKS", props.books);
  }, [props.books]);

  return (
    <div className='BookSearcher'>
      <SearchBox
        onChange={onQueryChange}
        value={query}
        placeholder='Type a book title...'
        onSearch={onSearch}
      />
      <Paginator
        decrement={decrementPage}
        page={page}
        totalPages={totalPages}
        increment={incrementPage}
      />
    </div>
  );
}
