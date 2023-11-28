import React, { useState } from 'react';
import './CreateTask.css';

function CreateTask(props) {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(5);
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

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
    // Bonus Challenge #1: Check for empty title before submitting
    if (!title) {
      setError('Needs title');
      return;
    }

    // Challenge #3: Create new one
    const data = {
      points: points,
      text: text,
      title: title,
    };

    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(data),
    };

    fetch('/api/create/', fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('success!');

        // Clean up state after
        setPoints(5);
        setText('');
        setTitle('');
        setError('');

        // And redirect to the first page
        props.history.push('/');
      });
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

      {error ? <p>{error}</p> : null}

      <button onClick={submit}>Create</button>
    </div>
  );
}

export default CreateTask;
