import { connect } from 'react-redux';

import actionCreators from '../../../actions/index.js';
import React, { useState } from 'react';
import './CreateTask.css';

function CreateTask(props) {
  const defaultState = getDefaultState();
  const [title, setTitle] = useState(defaultState.title);
  const [points, setPoints] = useState(defaultState.points);
  const [text, setText] = useState(defaultState.text);
  const [message, setMessage] = useState(defaultState.message);

  function getDefaultState() {
    if (!props.task) {
      // Not editing any tasks, show default / empty form
      return {
        title: '',
        points: 5,
        text: '',
      }
    } else {
      // We are editing something, let's use it to populate the form
      return props.task;
    }
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
    console.log('Getting submitted!');

    // Create & dispatch a new action
    const action = actionCreators.addTask(
      text,
      title,
      points,
    );
    props.dispatch(action);
    setMessage('Added!');
    props.history.push('/');
  }

  function save() {
    console.log('Getting saved!');

    // Create & dispatch a new action
    const action = actionCreators.editTask(
      props.task.id,
      title,
      text,
      points,
    );
    props.dispatch(action);
    setMessage('Saved!');
    props.history.push('/');
  }

  // If we are editing a task, we get it as a prop "task"
  const task = props.task;
  return (
    <div className="CreateTask">
      {
        task ? (
          <h1>Editing Task</h1>
        ) : (
          <h1>New Task</h1>
        )
      }

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

      {message && <h1>{message}</h1>}
      {
        task ? (
          <button onClick={save}>Save</button>
        ) : (
          <button onClick={submit}>Create</button>
        )
      }

    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let editingTaskID = ownProps.match.params.id;
  if (!editingTaskID) {
    // Not editing existing tasks, no extra store-related props needed!
    return {
      task: null,
    };
  }

  // Cast down to a number
  editingTaskID = Number(editingTaskID);

  // Now fetch the relevant task and include that as a prop
  const task = state.tasks.find(task => task.id === editingTaskID);
  return {
    task: task,
  };
}

export default connect(mapStateToProps)(CreateTask);
