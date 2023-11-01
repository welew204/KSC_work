import React from 'react';
import './Paginator.css';

const Paginator = props => (
  <div className="Paginator">
    <button onClick={props.decrementPage}>&larr;</button>
    <span>{props.page + 1} / {props.totalPages + 1}</span>
    <button onClick={props.incrementPage}>&rarr;</button>
  </div>
);

export default Paginator;
