import React from 'react';
import './DashboardColumn.css';
import { connect } from 'react-redux';
import actionCreators from '../../actions/index.js';

import Task from '../Task/Task.js';

const MAX_COLUMNS = 3;

function DashboardColumn(props) {
  function moveForward(id) {
    if (props.columnNumber >= MAX_COLUMNS) {
      return; // do nothing, reached end
    }
    props.moveTask(id, props.columnNumber + 1);
  }

  function moveBackward(id) {
    if (props.columnNumber <= 0) {
      return; // do nothing, reached end
    }
    props.moveTask(id, props.columnNumber - 1);
  }

  function onDelete(id) {
    console.log('Getting deleted!', id);

    // Create a new action
    const action = actionCreators.deleteTask(id);

    // Dispatch action to delete the task
    props.dispatch(action);
  }

  // NOTE: Could filter here, for more DRY code, but less encapsulated
  // const tasks = props.tasks
  //  .filter(task => task.phase === props.columnNumber);
  return (
    <div className="DashboardColumn">
      <h1>{props.title}</h1>
      {
        props.tasks.map(task => (
          <Task {...task}
            key={task.id}
            onMoveForward={() => moveForward(task.id)}
            onMoveBackward={() => moveBackward(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))
      }
    </div>
  );
}


export default connect()(DashboardColumn);
