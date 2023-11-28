import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  // modification required for REDUX_DEVTOOLS to work:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // (kinda annoying)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
