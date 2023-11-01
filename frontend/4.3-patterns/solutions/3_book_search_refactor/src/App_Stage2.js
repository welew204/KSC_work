import React, { useState } from 'react';
import './App.css';

import Books from './components/Books/Books.js';
import BookSearcher from './components/BookSearcher/BookSearcher.js';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function booksUpdated(newBookList) {
    setIsLoading(false);
    setBooks(newBookList);
  }

  function searchStarted() {
    setIsLoading(true);
  }

  return (
    <div className="App">
      <BookSearcher
        onBookListUpdated={booksUpdated}
        onSearchStart={searchStarted} />
      <Books
        isLoading={isLoading}
        books={books} />
    </div>
  );
}

export default App;
