import React from "react";
import "./Books.css";

export default function Books(props) {
  return (
    <div className='Books'>
      {props.isLoading ? (
        <div className='loader'>Loading...</div>
      ) : (
        props.books.map((book) => (
          <div className='Books-book' key={book.key}>
            {/* ^--- The "book.key" comes from the API, and is a unique ID
                            we'll use as the key for this map */}
            <img
              src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt='cover'
            />
            <div className='Books-book-details'>
              <div className='Books-book-title'>{book.title_suggest}</div>
              <strong>Author:</strong> {(book.author_name || []).join(",")}
              <br />
              <strong>Language:</strong> {(book.language || []).join(",")}
              <br />
              <strong>Year Published:</strong> {book.first_publish_year}
              <br />
              <strong>Publisher(s):</strong> {(book.publisher || []).join(",")}
              <br />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
