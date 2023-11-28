import React, {useState} from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../reducers/tasks.js';
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
    if (!title) {
      setError('Needs title');
      return;
    }

    const data = {
      points: points,
      text: text,
      title: title,
    };

    const action = actions.addTask(data);
    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);

    // Redirect (fake react-router redirect, that is) back to the "homepage"
    props.history.push('/');
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

export default connect()(CreateTask);
