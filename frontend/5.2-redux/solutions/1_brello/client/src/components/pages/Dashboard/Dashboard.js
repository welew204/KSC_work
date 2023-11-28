import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import Task from '../../Task/Task.js';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  function refreshData() {
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        console.log('got data back', data);
        setTasks(data.tasks);
      });
  }

  function moveTask(taskId, newPhase) {
    // Challenge #4: Implementing task movement on the backend using Fetch
    const data = {
      phase: newPhase,
    };

    fetch('/api/' + taskId + '/update/',
      {method: 'PUT', body: JSON.stringify(data) })
      .then(response => response.json())
      .then(data => {
        console.log('success!');

        // Call this method to refresh the page after
        refreshData();
      });
  }

  function deleteTask(taskId) {
    // Challenge #5: Implementing delete feature
    fetch('/api/' + taskId + '/delete/', {method: 'DELETE'})
      .then(response => response.json())
      .then(data => {
        console.log('success!');

        // Call this method to refresh the page after
        refreshData();
      });
  }

  useEffect(refreshData, []);

  const tasksPhase0 = tasks.filter(task => task.phase === 0);
  const tasksPhase1 = tasks.filter(task => task.phase === 1);
  const tasksPhase2 = tasks.filter(task => task.phase === 2);
  const tasksPhase3 = tasks.filter(task => task.phase === 3);

  // For solution to Bonus Challenge #3, see Activity 4

  return (
    <div className="Dashboard">
      <div className="Dashboard-column">
        <h1>Wanna do it</h1>
        {
          tasksPhase0.map(task => (
            <Task title={task.title} text={task.text} phase={task.phase} points={task.points} id={task.id}
              onDelete={() => deleteTask(task.id)}
              onMoveForward={() => moveTask(task.id, 1)}
            />
          ))
        }
      </div>
      <div className="Dashboard-column">
        <h1>Gettin it done</h1>
        {
          tasksPhase1.map(task => (
            <Task title={task.title} text={task.text} phase={task.phase} points={task.points} id={task.id}
              onDelete={() => deleteTask(task.id)}
              onMoveForward={() => moveTask(task.id, 2)}
              onMoveBackward={() => moveTask(task.id, 0)}
            />
          ))
        }
      </div>
      <div className="Dashboard-column">
        <h1>I did it already</h1>
        {/* The "..." is shorthand to assign everything as props */}
        {
          tasksPhase2.map(task => (
            <Task {...task}
              onDelete={() => deleteTask(task.id)}
              onMoveForward={() => moveTask(task.id, 3)}
              onMoveBackward={() => moveTask(task.id, 1)}
            />
          ))
        }
      </div>
      <div className="Dashboard-column">
        {/* Challenge #1 */}
        <h1>Forget about it</h1>
        {
          tasksPhase3.map(task => (
            <Task {...task}
              onDelete={() => deleteTask(task.id)}
              onMoveBackward={() => moveTask(task.id, 2)}
            />
          ))
        }

      </div>
    </div>
  );
}

export default Dashboard;
