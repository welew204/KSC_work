import React from 'react';
import './MovieDetails.css';

const MovieDetails = (props) => (
  <div className="MovieDetails">
    <strong>Name</strong>
    <p>{props.name}</p>

    <strong>Details</strong>
    <p>{props.details}</p>

    <strong>Rating</strong>
    <p>{props.rating}</p>

    <strong>Year</strong>
    <p>{props.year}</p>

    <strong>Director</strong>
    <p>{props.director}</p>

    <strong>Length</strong>
    <p>{props.length} minutes</p>
  </div>
);

export default MovieDetails;
