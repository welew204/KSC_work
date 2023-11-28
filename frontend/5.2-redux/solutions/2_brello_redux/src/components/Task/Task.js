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
        <button onClick={props.onDelete}>
          <span role="img" aria-label="Trash can">🗑</span>
        </button>
        <button onClick={props.onMarkAsComplete}>
          <span role="img" aria-label="Check box">✓</span>
        </button>
        <button onClick={props.onCopy}>
          <span role="img" aria-label="Copy">⎘</span>
        </button>
        <Link to={"/edit/" + props.id}>
          <span role="img" aria-label="Edit">📝</span>
        </Link>
        <button onClick={props.onMoveForward}>&rarr;</button>
      </p>
    </div>
  );
}

export default Task;
