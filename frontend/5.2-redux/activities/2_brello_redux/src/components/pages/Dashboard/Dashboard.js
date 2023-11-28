import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../reducers/tasks.js';
import './Dashboard.css';

import Task from '../../Task/Task.js';

function Dashboard(props) {

  function moveTaskRight(taskId) {
    const action = actions.moveTaskForward(taskId);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);
  }

  function moveTaskLeft(taskId) {
    const action = actions.moveTaskBackward(taskId);
    props.dispatch(action);
  }

  function deleteTask(taskId) {
    const action = actions.deleteTask(taskId);
    props.dispatch(action);
  }

  function setTaskAsCompleted(taskId) {
    // TODO: Challenge 5, finish this
  }

  // "props.tasks" is how we are "getting" the redux state (see mapStateToProps
  // below)
  const tasksPhase0 = props.tasks.filter(task => task.phase === 0);
  const tasksPhase1 = props.tasks.filter(task => task.phase === 1);
  const tasksPhase2 = props.tasks.filter(task => task.phase === 2);
  const tasksPhase3 = props.tasks.filter(task => task.phase === 3);

  // Use a trick with "map" and "reduce" to sum up points for each column
  // (Solution to Bonus Challenge #3 of Activity 1)
  const sum0 = tasksPhase0.map(task => Number(task.points)).reduce((a, b) => a + b, 0);
  const sum1 = tasksPhase1.map(task => Number(task.points)).reduce((a, b) => a + b, 0);
  const sum2 = tasksPhase2.map(task => Number(task.points)).reduce((a, b) => a + b, 0);
  const sum3 = tasksPhase3.map(task => Number(task.points)).reduce((a, b) => a + b, 0);

  return (
    <div className="Dashboard">
      <div className="Dashboard-column">
        <h1>Wanna do it ({sum0})</h1>
        {
          tasksPhase0.map(task => (
            <Task
              title={task.title}
              text={task.text}
              phase={task.phase}
              points={task.points}
              id={task.id}
              key={task.id}
              onDelete={() => deleteTask(task.id)}
              onMoveForward={() => moveTaskRight(task.id)}
              onMarkAsComplete={() => setTaskAsCompleted(task.id)}
            />
          ))
        }
      </div>
      <div className="Dashboard-column">
        <h1>Gettin it done ({sum1})</h1>
        {/* The "..." is shorthand to assign everything as props */}
        {
          tasksPhase1.map(task => (
            <Task {...task}
              key={task.id}
              onDelete={() => deleteTask(task.id)}
              onMoveForward={() => moveTaskRight(task.id)}
              onMoveBackward={() => moveTaskLeft(task.id)}
              onMarkAsComplete={() => setTaskAsCompleted(task.id)}
            />
          ))
        }
      </div>
      <div className="Dashboard-column">
        <h1>I did it already ({sum2})</h1>
        {
          tasksPhase2.map(task => (
            <Task {...task}
              key={task.id}
              onDelete={() => deleteTask(task.id)}
              onMoveForward={() => moveTaskRight(task.id)}
              onMoveBackward={() => moveTaskLeft(task.id)}
              onMarkAsComplete={() => setTaskAsCompleted(task.id)}
            />
          ))
        }
      </div>
      <div className="Dashboard-column">
        <h1>Forget about it ({sum3})</h1>
        {
          tasksPhase3.map(task => (
            <Task {...task}
              key={task.id}
              onDelete={() => deleteTask(task.id)}
              onMoveBackward={() => moveTaskLeft(task.id, 2)}
              onMarkAsComplete={() => setTaskAsCompleted(task.id)}
            />
          ))
        }
      </div>
    </div>
  );
}

// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = state => ({ tasks: state });
export default connect(mapStateToProps)(Dashboard);
