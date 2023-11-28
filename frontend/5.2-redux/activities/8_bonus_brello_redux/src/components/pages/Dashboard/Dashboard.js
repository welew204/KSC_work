import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../../../actions/index.js';
import './Dashboard.css';

import DashboardColumn from '../../DashboardColumn/DashboardColumn.js';

function Dashboard(props) {

  function moveTask(taskId, newPhase) {
    // Create a new action
    const action = actionCreators.moveTask(taskId, newPhase);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);
  }

  function doDelete() {
    // Create a new action
    const action = actionCreators.deleteTask(2);

    // hmmmmm need to do dispatch this action now....
  }

  const tasksPhase0 = props.tasks.filter(task => task.phase === 0);
  const tasksPhase1 = props.tasks.filter(task => task.phase === 1);
  const tasksPhase2 = props.tasks.filter(task => task.phase === 2);
  const tasksPhase3 = props.tasks.filter(task => task.phase === 3);

  return (
    <div className="Dashboard">
      {/*
        <div>
          <button onClick={doDelete}>Delete id 2</button>
        </div>
        */}
      <DashboardColumn
        title="Wanna do it"
        tasks={tasksPhase0}
        columnNumber={0}
        moveTask={moveTask}
      />

      <DashboardColumn
        title="Gettin it done"
        tasks={tasksPhase1}
        columnNumber={1}
        moveTask={moveTask}
      />

      <DashboardColumn
        title="Did it already"
        tasks={tasksPhase2}
        columnNumber={2}
        moveTask={moveTask}
      />

      <DashboardColumn
        title="Forget about it"
        tasks={tasksPhase3}
        columnNumber={3}
        moveTask={moveTask}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state getting mapped', state); // state
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
