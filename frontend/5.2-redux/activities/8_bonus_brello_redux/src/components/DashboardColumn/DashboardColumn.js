import React, { Component } from 'react';
import './DashboardColumn.css';

import Task from '../Task/Task.js';

const MAX_COLUMNS = 3;

class DashboardColumn extends Component {
  moveForward = (id) => {
    if (this.props.columnNumber >= MAX_COLUMNS) {
      return; // do nothing, reached end
    }
    this.props.moveTask(id, this.props.columnNumber + 1);
  }

  moveBackward = (id) => {
    if (this.props.columnNumber <= 0) {
      return; // do nothing, reached end
    }
    this.props.moveTask(id, this.props.columnNumber - 1);
  }

  onDelete = (id) => {
    console.log('Getting deleted!', id);
    // TODO
  }

  render() {
    // NOTE: Could filter here, for more DRY code, but less encapsulated
    // const tasks = this.props.tasks
    //  .filter(task => task.phase === this.props.columnNumber);
    return (
      <div className="DashboardColumn">
        <h1>{this.props.title}</h1>
        {
          this.props.tasks.map(task => (
            <Task {...task}
              key={task.id}
              onMoveForward={() => this.moveForward(task.id)}
              onMoveBackward={() => this.moveBackward(task.id)}
              onDelete={() => this.onDelete(task.id)}
            />
          ))
        }
      </div>
    );
  }
}


export default DashboardColumn;
