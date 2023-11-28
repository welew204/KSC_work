import React, { useState } from 'react';
import './CreateTask.css';

function CreateTask(props) {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(5);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function onChangeTitle(ev) {
    setTitle(ev.target.value);
  }

  function onChangeText(ev) {
    setText(ev.target.value);
  }

  function onChangePoints(ev) {
    setPoints(ev.target.value);
  }

  function submit() {
    console.log('Getting submitted!');

    // TODO
  }

  return (
    <div className="CreateTask">
      <h1>New Task</h1>

      <p>
        <label>Title
          <input
            onChange={onChangeTitle}
            value={title} />
        </label>
      </p>

      <p>
        <label>Points
          <input
            type="number"
            onChange={onChangePoints}
            value={points} />
        </label>
      </p>

      <p>
        <label>Text
          <textarea
            onChange={onChangeText}
            value={text} />
        </label>
      </p>

      {error && <h1>{error}</h1>}
      <button onClick={submit}>Create</button>
    </div>
  );
}

export default CreateTask;
