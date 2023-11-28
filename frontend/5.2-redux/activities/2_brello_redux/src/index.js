import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers/tasks';

// Create the "Store" out of our reducer
const store = createStore(
  reducer,
  // hacky modification required for REDUX_DEVTOOLS to work:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));

// If we had wanted to add more reducers, we can combine them as such
// import { combineReducers } from 'redux';
// const rootReducer = combineReducers({
//   tasks: reducer,
// });

