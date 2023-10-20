import React from 'react';
import './BookCarousel.css';
import BoxSelector from '../BoxSelector/BoxSelector.js';
import BookInfo from '../BookInfo/BookInfo.js';

function BookCarousel(props) {
  const name = props.value;
  const info = props.data[name];
  if (!info) {
    // If nothing is selected, show that we're loading
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="BookCarousel">
      <BookInfo
        title={name}
        author={info.author}
        release={info.releaseDate}
        coverImage={info.cover}
      />

      {
        /* The old way of doing it is below: */
        /*
        Object.entries(props.data).map(([name, info]) => (
          name === props.value ? (
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
        */
      }

      <BoxSelector
        choices={Object.keys(props.data)}
        selectedValue={props.value}
        onSelectionChange={props.onChange}
      />

    </div>
  );
}

export default BookCarousel;
