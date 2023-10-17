import React, { useEffect, useState } from "react";
import "./App.css";

/* Example HTML & CSS */

function App() {
  const [searchBox, setSearchBox] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [onPage, setOnPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  //console.log(onPage);

  function handleSearch(event) {
    //console.log(event.target.value);
    setSearchBox(event.target.value);
  }

  function doFetch() {
    console.log("I'm getting books!");
    setIsLoading(true);
    fetch(
      `https://openlibrary.org/search.json?q=${searchBox
        .split(" ")
        .join("+")}&limit=10&offset=${onPage * 10}`
    )
      .then((data) => data.json())
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        setTotalResults(res.numFound);
        setBooks(res.docs);
      });
  }
  useEffect(() => {
    doFetch();
  }, [onPage]);

  function handlePage(dir) {
    if (dir === "l") {
      let set_to = onPage > 0 ? onPage - 1 : 0;
      setOnPage(set_to);
    } else {
      let set_to =
        onPage < parseInt(totalResults / 10)
          ? onPage + 1
          : parseInt(totalResults / 10);
      setOnPage(set_to);
    }
  }

  return (
    <div className='App'>
      <div className='SearchBox'>
        <input
          onChange={handleSearch}
          className='SearchBox-input'
          placeholder='Type a book title...'
        />
        <button onClick={doFetch} className='SearchBox-button'>
          Search
        </button>
      </div>
      <div className='Paginator'>
        <button onClick={() => handlePage("l")}>&larr;</button>
        <span>
          {onPage + 1} / {parseInt(totalResults / 10)}
        </span>
        <button onClick={() => handlePage("r")}>&rarr;</button>
      </div>
      <div className='Books'>
        {isLoading ? <div className='LoadSpinner'>LOADING</div> : void 0}
        {books
          .filter((book) => book.isbn)
          .map((book) => (
            <div key={book.key} className='Books-book'>
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`}
              />
              <div className='Books-bookDetails'>
                <div className='Books-bookTitle'>{book.title}</div>
                <strong>Author:</strong> {book.author_name[0]}
                <br />
                <strong>Language:</strong>{" "}
                {book.language ? book.language : "unknown"}
                <br />
                <strong>Year Published:</strong> {book.publish_year[0]}
                <br />
                <strong>Publisher(s):</strong> {book.publisher[0]}
                <br />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
