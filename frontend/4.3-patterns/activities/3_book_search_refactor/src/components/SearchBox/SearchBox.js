import React from "react";

export default function SearchBox(props) {
  return (
    <div className='SearchBox'>
      <input
        onChange={props.onChange}
        value={props.query}
        placeholder={props.placeholder}
      />
      <button onClick={props.onSearch}>Search</button>
    </div>
  );
}
