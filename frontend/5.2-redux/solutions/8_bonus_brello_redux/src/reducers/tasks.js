import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MOVE_TASK,
} from '../constants/ActionTypes';

const initialState = [
  {
    title: 'Make nice React app',
    points: 8,
    phase: 1,
    id: 1,
    text: 'This React thing seems good for UI, lets use it',
  },
  {
    title: 'Create CRUD functionality',
    points: 5,
    phase: 3,
    id: 2,
    text: 'Work on Python bottle.py-based CRUD API',
  },
  {
    title: "Add in Redux",
    points: 10,
    phase: 0,
    id: 3,
    text: 'Refactor to add in this trendy thing called redux',
  },
];

export default function tasks(state = initialState, action) {
  switch (action.type) {
  case ADD_TASK:
    // Figure out the next available ID
    const allIds = state.map(task => task.id);
    const nextID = Math.max(...allIds) + 1;

    // Duplicate the state, and add to the end the new task
    return state.concat([
      {
        id: nextID,
        text: action.text,
        title: action.title,
        points: action.points,
        phase: 0,
      }
    ]);

  case DELETE_TASK:
    // Return the state, except omit the task that has the given ID
    return state.filter(task =>
      task.id !== action.id
    );

  case EDIT_TASK:
    // Duplicate the state to work with it
    return state.map(task => {
      // Find the relevant task using the Array method "find"
      if (task.id === action.id) {
        // modify the task to have the new properties
        return Object.assign({}, task, {
          title: action.title,
          text: action.text,
          points: action.points,
        });
      } else {
        // One of the other tasks, skip over
        return task;
      }
    });

  case MOVE_TASK:
    // Duplicate the state to work with it
    return state.map(task => {
      // Find the relevant task using the Array method "find"
      if (task.id === action.id) {
        // modify the task to have the new properties
        return Object.assign({}, task, {
          phase: action.phase,
        });
      } else {
        // One of the other tasks, skip over
        return task;
      }
    });

  default:
    return state;
  }
}
