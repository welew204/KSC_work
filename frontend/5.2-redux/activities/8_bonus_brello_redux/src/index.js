import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  // modification required for REDUX_DEVTOOLS to work:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // (kinda annoying)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
