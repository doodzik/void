import React,  { Component } from "react"
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import Radium from 'radium'
import SC from 'soundcloud'

SC.initialize({
  client_id: 'f7790d392de1d10fe1e353c87f9a50ce'
})

import Nav from './src/nav.jsx'
import Tags from './src/tags.jsx'
import Player from './src/player.jsx'
import Header from './src/header.jsx'

function playlist(state = { index: 0, tracks: [] } , action) {
  const limit = 200

  switch (action.type) {
  case 'NEXT':
    state.index + 1
    return state
  case 'QUERY':
    state.tracks = []
    
  case 'LOAD':
    // .join(', ')
    // state.tracks <<
  default:
    return state;
  }
}

let store = createStore(playlist);

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
        <Header style={[header_style]} />
        <Tags style={[tag_style]} triggerSearched={this.triggerSearched.bind(this)} />
        <Player style={[player_style]}/>
      </div>
    )
  }
}

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
