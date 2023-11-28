// Reducers for Tasks "slice"
import {createSlice} from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
  name: 'tasks',
  initialState: [
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
    // Challenge #4
    {
      title: "Learn MERN",
      points: 8,
      phase: 0,
      id: 4,
      text: 'A lot of coders seem to like it',
    },
  ],

  // Define the different action types, and the reducers that handle them
  // (cause the action to occur by modifying the state). Since we are using
  // react-toolkit, it allows us to "modify" the state in place (in reality it
  // is making a copy of state for us to modify), making modifying container
  // types much more straight-forward.
  reducers: {
    moveTaskBackward: (state, action) => {
      // Use .find to search through the array looking for the task of given ID
      // (.find is a built-in method n JS that can be used on any array and
      // will return the first item that matches the given condition, supplied
      // by the (arrow) function.)
      const task = state.find(task => task.id === action.payload);
      if (task.phase > 0) {
        // Modify the task, decreasing the phase, but only if its > 0
        task.phase--;
      }
    },

    editTask: (state, action) => {
      // Use .find to search through the array looking for the task of given ID
      const task = state.find(task => task.id === action.payload.id);
      // Modify the task with the new data
      task.title = action.payload.title;
      task.text = action.payload.text;
      task.points = action.payload.points;
    },

    deleteTask: (state, action) => {
      // Use .findIndex to search through the array looking for the index of
      // the task that matches the condition
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1); // delete the item
    },

    moveTaskForward: (state, action) => {
      // Alternate way to find an element: Use a for loop
      for (const task of state) {
        // Loop through the array looking for the task of given ID
        if (task.id === action.payload) {
          // Modify the task, increasing the phase, but only if its phase is
          // less than 4
          if (task.phase < 4) {
            task.phase++;
          }
          break; // exit the loop
        }
      }
    },

    addTask: (state, action) => {
      // Figure out the next available ID
      const allIds = state.map(task => task.id);
      const nextID = Math.max(...allIds) + 1;

      // With add another task to the end of the array
      state.push({
        id: nextID,
        text: action.payload.text,
        title: action.payload.title,
        points: action.payload.points,
        phase: 0,
      });
    },

    markAsComplete: (state, action) => {
      // Challenge #5 solution:
      const task = state.find(task => task.id === action.payload);
      // Modify the task, setting it to phase 3
      task.phase = 3;
    },

    // Challenge #6 goes here
    copyTask: (state, action) => {
      // Find the task we need to copy
      const task = state.find(task => task.id === action.payload);

      // Do the same logic as adding a new task.
      const allIds = state.map(task => task.id);
      const nextID = Math.max(...allIds) + 1;

      // Add the duplicate task to the end of the array
      state.push({
        id: nextID,
        text: task.text,
        title: task.title,
        points: task.points,
        phase: 0,
      });
    },
  },
});

export {actions, reducer};
