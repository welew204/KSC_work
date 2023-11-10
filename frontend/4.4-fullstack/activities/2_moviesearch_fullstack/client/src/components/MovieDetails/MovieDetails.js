import React from "react";
import "./MovieDetails.css";

const MovieDetails = (props) => (
  <div className='MovieDetails'>
    <strong>Name</strong>
    <p>{props.name}</p>

    <strong>Details</strong>
    <p>{props.description}</p>

    <strong>Rating</strong>
    <p>{props.rating}</p>

    <strong>Year</strong>
    <p>{props.year}</p>

    <strong>Director</strong>
    <p>{props.director}</p>

    <strong>Length</strong>
    <p>{props.length}</p>
  </div>
);

export default MovieDetails;
