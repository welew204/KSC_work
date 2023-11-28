import * as types from '../constants/ActionTypes'

const addTask = (text, title, points) => {
  return { type: types.ADD_TASK, text, title, points };
}

const moveTask = (id, newPhase) => {
  return { type: types.MOVE_TASK, phase: newPhase, id };
}

const editTask = (id, title, text, points) => {
  return {
    type: types.EDIT_TASK,
    id: id,
    title: title,
    text: text,
    points: points,
  };
}

const deleteTask = id => {
  // Modern JS Shorthand: to avoid id: id, you can just specify one, like this
  return { type: types.DELETE_TASK, id };
}

export default {
  addTask,
  moveTask,
  deleteTask,
  editTask,
};
