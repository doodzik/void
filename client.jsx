import React,  { Component }                             from "react"
import ReactDOM                                          from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider }                                      from 'react-redux'
import thunk                                             from 'redux-thunk'
import SC                                                from 'soundcloud'

SC.initialize({
  client_id: 'f7790d392de1d10fe1e353c87f9a50ce'
})

// stores
import view from './src/store/view.jsx'
import logo from './src/store/logo.jsx'

import App  from './src/app.jsx'

// const stateDefault = Immutable.Map({
//   query: 'idle',  // running, ended
//   tags: [],
//   playlist: [],
//   playlistIndex: 0
// })

// function playlist(state = stateDefault, action) {
//   const limit = 200
//   switch (action.type) {
//   case 'NEXT':
//   // case 'LOAD':
//     // .join(',')
//   default:
//     return state;
//   }
// }

const voidApp = combineReducers({
  view,
  logo,
})

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const store = createStoreWithMiddleware(voidApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
