import React, { useState, useEffect } from 'react';
import './EditTask.css';

function EditTask(props) {

  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(5);
  const [text, setText] = useState('');
  const [error, setError] = useState(null);


  // Get the taskId
  const taskId = props.match.params.id;

  function refreshData() {
    // Bonus Challenge #2: Do update
    fetch('/api/' + taskId)
      .then(response => response.json())
      .then(data => {
        console.log('success!', data);

        // Set data from the response
        setPoints(data.task.points);
        setText(data.task.text);
        setTitle(data.task.title);
      });
  }

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

    const data = {
      points: points,
      text: text,
      title: title,
    };

    const fetchOptions = {
      method: 'PUT',
      body: JSON.stringify(data),
    };

    const url = '/api/' + taskId + '/update/';
    fetch(url, fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('success!');

        // Clear error after
        setError('');

        // And redirect to the first page
        props.history.push('/');
      });
  }

  useEffect(refreshData, []);
  return (
    <div className="EditTask">
      <h1>Edit Task</h1>

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

      <button onClick={submit}>Update</button>
    </div>
  );
}

export default EditTask;
