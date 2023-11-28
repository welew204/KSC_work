import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import { reducer as postsReducer }  from './reducers/posts';
import { reducer as avatarsReducer }  from './reducers/avatars';

// Combine reducer slices into a single reducer
const rootReducer = combineReducers({
  posts: postsReducer,
  avatars: avatarsReducer,
});

// Create the "Store" out of our reducer
const store = createStore(
  rootReducer,
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

