import React from 'react';
import './CharacterCard.css';

function CharacterCard(props) {
  return (
    <div className="CharacterCard">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p><strong>Bio:</strong> {props.bio}</p>
      <p><strong>Birth Year:</strong> {props.birthYear}</p>
      <p><strong>Species:</strong> {props.species}</p>
      {
        props.ring ? (
          <p><strong>Ring of Power:</strong> {props.ring}</p>
        ) : (
          null
        )
      }
      <p><strong>Title:</strong> {props.title}</p>
    </div>
  );
}

export default CharacterCard;
