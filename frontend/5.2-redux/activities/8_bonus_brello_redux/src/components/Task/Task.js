import React from 'react';
import { Link } from 'react-router-dom';

import './Task.css';
function Task(props) {

  return (
    <div className="Task">
      <div className="Task-points">{props.points}</div>
      <h1>{props.title}</h1>
      <p><strong>Text</strong> {props.text}</p>
      <p><strong>Phase</strong> {props.phase}</p>
      <p><strong>Points</strong> {props.points}</p>
      <br />
      <p>
        <button onClick={props.onMoveBackward}>&larr;</button>
        <button onClick={props.onDelete}>🗑</button>
        <Link to={"/edit/" + props.id}>📝</Link>
        <button onClick={props.onMoveForward}>&rarr;</button>
      </p>
    </div>
  );
}

export default Task;
