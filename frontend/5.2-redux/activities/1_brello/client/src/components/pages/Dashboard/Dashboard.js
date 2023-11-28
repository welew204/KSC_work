import React, { useState } from "react";
import "./Dashboard.css";

import Task from "../../Task/Task.js";

const defaultTasks = [
  {
    title: "Make nice React app",
    points: 8,
    phase: 1,
    id: 1,
    text: "This React thing seems good for UI, lets use it",
  },
  {
    title: "Create CRUD functionality",
    points: 5,
    phase: 3,
    id: 2,
    text: "Work on Python bottle.py-based CRUD API",
  },
  {
    title: "Add in Redux",
    points: 10,
    phase: 0,
    id: 3,
    text: "Refactor to add in this trendy thing called redux",
  },
];

function Dashboard(props) {
  const [tasks, setTasks] = useState(defaultTasks);

  function getTasks() {
    fetch("/api/all")
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks));
  }
  getTasks();

  function moveTask(taskId, newPhase) {
    // Duplicate the state to work with it
    const tasksCopy = tasks.slice();

    // Find the relevant task using the Array method "find"
    const task = tasksCopy.find((task) => task.id === taskId);

    // modify the phrase to be the new requested phrase
    task.phase = newPhase;

    // Set the new state to rerender
    setTasks(tasksCopy);
  }

  const tasksPhase0 = tasks.filter((task) => task.phase === 0);
  const tasksPhase1 = tasks.filter((task) => task.phase === 1);
  const tasksPhase2 = tasks.filter((task) => task.phase === 2);
  const tasksPhase3 = tasks.filter((task) => task.phase === 3);

  return (
    <div className='Dashboard'>
      <div className='Dashboard-column'>
        <h1>Wanna do it</h1>
        {tasksPhase0.map((task) => (
          <Task
            title={task.title}
            text={task.text}
            phase={task.phase}
            points={task.points}
            key={task.id}
            onMoveForward={() => moveTask(task.id, 1)}
          />
        ))}
      </div>
      <div className='Dashboard-column'>
        <h1>Gettin it done</h1>
        {tasksPhase1.map((task) => (
          <Task
            title={task.title}
            text={task.text}
            phase={task.phase}
            points={task.points}
            key={task.id}
            onMoveForward={() => moveTask(task.id, 2)}
            onMoveBackward={() => moveTask(task.id, 0)}
          />
        ))}
      </div>
      <div className='Dashboard-column'>
        <h1>I did it already</h1>
        {/* The "..." is shorthand to assign everything as props */}
        {tasksPhase2.map((task) => (
          <Task
            {...task}
            key={task.id}
            onMoveForward={() => moveTask(task.id, 3)}
            onMoveBackward={() => moveTask(task.id, 1)}
          />
        ))}
      </div>
      <div className='Dashboard-column'>
        <h1>Forget about it</h1>
        {tasksPhase3.map((task) => (
          <Task
            {...task}
            key={task.id}
            onMoveForward={() => moveTask(task.id, 3)}
            onMoveBackward={() => moveTask(task.id, 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
