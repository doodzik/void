import React,  { Component } from "react"
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Radium from 'radium'
import SC from 'soundcloud'
import Immutable from 'immutable'

SC.initialize({
  client_id: 'f7790d392de1d10fe1e353c87f9a50ce'
})

import Nav from './src/nav.jsx'
import Tags from './src/tags.jsx'
import Player from './src/player.jsx'
import Header from './src/header.jsx'
import Modals from './src/modal.jsx'

// stores
import view from './src/store/view.jsx'

// const stateDefault = Immutable.Map({
//   logo: 'ready',  // running | ended
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
})

let store = createStore(voidApp);

@Radium
class App extends Component {
  constructor() {
    super()
    return { progress: '' }
  }

  triggerSearched() {
    if (this.state.progress == 'searching') return
    this.setState({progress: 'searched'})
    setTimeout(() => {
      this.triggerSearching()
    }, 2000)
  }

  triggerSearching() {
    this.setState({progress: 'searching'})
  }

  render() {
    var tag_style    = {opacity: 1, transition: '2s'}
    var header_style = {opacity: 1, transition: '500ms'}
    var player_style = {opacity: 0, transition: '500ms'}
    if (this.state.progress == 'searched') {
      tag_style.transform = 'translateY(-23em)'
      header_style.opacity = 0
    } else if (this.state.progress == 'searching') {
      header_style.display = 'none'
      header_style.transition = '0s'
      tag_style.transition = '0s'
      tag_style.transform  = 'translateY(0)'
      player_style.opacity = 1
    }

    return (
      <div style={[{
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '44em',
        marginTop: '5em'
      }]}>
        <Nav />
        <Modals />
        <Header style={[header_style]} />
        <Tags style={[tag_style]} triggerSearched={this.triggerSearched.bind(this)} />
        <Player style={[player_style]}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
