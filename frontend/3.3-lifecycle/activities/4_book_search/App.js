import React, { useState } from 'react';
import './App.css';

/* Example HTML & CSS */

function App () {
  return (
    <div className="App">
      <div className="SearchBox">
        <input className="SearchBox-input" placeholder="Type a book title..." />
        <button className="SearchBox-button">Search</button>
      </div>
      <div className="Paginator">
        <button>&larr;</button>
        <span>1 / 1</span>
        <button>&rarr;</button>
      </div>
      <div className="Books">
        {/* <div className="LoadSpinner"></div> */}
        <div className="Books-book">
          <img src="https://via.placeholder.com/150" />
          <div className="Books-bookDetails">
            <div className="Books-bookTitle">title</div>
            <strong>Author:</strong> author<br />
            <strong>Language:</strong> language<br />
            <strong>Year Published:</strong> year<br />
            <strong>Publisher(s):</strong> publisher<br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
