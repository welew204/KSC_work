import React from "react";
import "./Paginator.css";

export default function Paginator(props) {
  return (
    <div className='Paginator'>
      <button onClick={props.decrement}>&larr;</button>
      <span>
        {props.page + 1} / {props.totalPages + 1}
      </span>
      <button onClick={props.increment}>&rarr;</button>
    </div>
  );
}
