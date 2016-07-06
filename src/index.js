import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
require('whatwg-fetch')

import reducer from './reducers/reducer'
import App from './containers/app'

const store = createStore (
  reducer,
  undefined,
  applyMiddleware(thunk, createLogger())
)

render(
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root'));
