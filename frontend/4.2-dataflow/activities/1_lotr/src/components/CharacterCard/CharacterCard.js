import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  return (
    <div className='CharacterCard'>
      <img src={props.thumb} alt={props.fname} />
      <h1>{props.fname}</h1>
      <p>
        <strong>Bio:</strong> {props.bio}
      </p>
      <p>
        <strong>Birth Year:</strong> {props.birthYear}
      </p>
      <p>
        <strong>Species:</strong> {props.species}
      </p>
      {props.ringOfPower ? (
        <p>
          <strong>Ring of Power:</strong> {props.ringOfPower}
        </p>
      ) : (
        void 0
      )}
      <p>
        <strong>Title:</strong> {props.title}
      </p>
    </div>
  );
}
