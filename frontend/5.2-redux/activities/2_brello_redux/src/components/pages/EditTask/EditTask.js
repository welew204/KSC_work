import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../reducers/tasks.js';

import './EditTask.css';

function EditTask(props) {
  // Use the one task we are editing (which was retrieved in the
  // mapStateToProps function) as the default value for all our state variables
  const [title, setTitle] = useState(props.task.title);
  const [points, setPoints] = useState(props.task.points);
  const [text, setText] = useState(props.task.text);
  const [error, setError] = useState(props.task.error);

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

    const targetTaskId = Number(props.match.params.id);
    const data = {
      id: targetTaskId,
      points: points,
      text: text,
      title: title,
    };

    const action = actions.editTask(data);
    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);

    // Redirect (fake react-router redirect, that is) back to the "homepage"
    props.history.push('/');
  }

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


// "mapStateToProps" is a special function that is used to "connect" the Redux
// state slice to the props of this React component. Within the React
// component, this data will be "received" as a prop. Often, we don't do any
// work here, but sometimes we need to use it to something in particular, as in
// this case.
function mapStateToProps(state, props) {
  // Get the task ID from the URL parameter
  const targetTaskId = Number(props.match.params.id);

  // .find is an array method that lets us pick out a single element from an
  // array based on a condition
  const foundTask = state.find(task => task.id === targetTaskId);

  // Return the extra prop we want to add
  return {
    task: foundTask
  };
}
export default connect(mapStateToProps)(EditTask);
