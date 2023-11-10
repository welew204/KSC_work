import React from 'react';
import './MovieDetails.css';

const MovieDetails = props => (
  <div className="MovieDetails">
    <strong>Name</strong>
    <p>{props.name}</p>

    <strong>Details</strong>
    <p>{props.details}</p>

    <strong>Rating</strong>
    <p></p>

    <strong>Year</strong>
    <p></p>

    <strong>Director</strong>
    <p></p>

    <strong>Length</strong>
    <p>minutes</p>
  </div>
);


export default MovieDetails;
