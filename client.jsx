import React,  { Component } from "react"
import TagsInput             from 'react-tagsinput'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
var Radium = require('radium')
var Color = require('color')
var moment = require('moment')
var SC = require('soundcloud')

import Nav from './src/nav.jsx'

SC.initialize({
  client_id: 'f7790d392de1d10fe1e353c87f9a50ce'
})

require('./tag.css')

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

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(playlist);

@Radium
class Tags extends Component {
  saveTags() {
    // SC.stream(`/tracks/${id}`).then(function(player){
    //   player.play();
    // });

    this.props.triggerSearched()
    const tags = this.refs.tags.getTags().join(', ')
    // const created_at_to = moment().subtract(2, 'day').format('YYYY-MM-DD hh:mm:ss')
    const created_at_from = moment().subtract(1, 'day').format('YYYY-MM-DD hh:mm:ss')

    SC.get('/tracks', { tags, limit, "created_at[from]": created_at_from }).then(tracks => {
      console.log(tracks)
    })
  }

  render() {
    return (
      <div style={[
        {
          display: 'flex',
          marginBottom: '2em'
        }
      ].concat(this.props.style || [])}>
        <TagsInput ref='tags' />
        <button
          onClick={this.saveTags.bind(this)}
          style={[{
            maxWidth: '6em',
            flex: 1,
            background: 'rgba(255,55,255,1)',
            border: 'none',
            transition: 'background-color 200ms, border 200ms',
            ':hover': {
                background: Color('rgb(255,55,255)').lighten(0.2).hexString()
              },
            ':active': {
                background: Color('rgb(255,55,255)').lighten(0.2).hexString(),
                border: '4px inset rgba(0, 0, 0, 0.33)',
                outline: 'none'
            },
            ':focus': {
                outline: 'none'
            }
            }]}
        >Search</button>
      </div>
    );
  }
}


@Radium
class Header extends Component {
  render() {
    const paragraph = {
      color: '#685206',
      fontFamily: "'Helvetica Neue', sans-serif",
      fontSize: '14px',
      lineHeight: '24px',
      margin: '0 0 24px',
      textAlign: 'justify',
      textJustify: 'inter-word'
    }
    return (
      <div style={[
        {
          height: '23em',
          textAlign: 'center'
        }
      ].concat(this.props.style || [])}>
        <h1 style={[{
          color:'#111',
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: '275px',
          fontWeight: 'bold',
          letterSpacing: '-1px',
          lineHeight: 1,
          textAlign: 'center'
        }]} >void</h1>
        <h2 style={[{
          color: '#111',
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '30px',
          fontWeight: '300',
          lineHeight: '32px',
          margin: '0 0 72px',
          textAlign: 'center'
        }]} > explore music better </h2>
    </div>
    )
  }
}

@Radium
class Player extends Component {
  render() {
    const centerText = {
      display: 'flex',
      justifyContent:'center',
      alignContent:'center',
      flexDirection:'column',
    }

    const progressbar = {
      background: ''
    }

    const button = {
      border: 'solid #9A9A9A 1px',
      color: '#000',
      background: '#fff'
    }

    return (
      <div style={[{
          display: 'flex',
          flexDirection: 'column',
          height: '200px'
        }].concat(this.props.style || [])}>
        <div style={[{
          display: 'flex',
          flexDirection: 'column',
          flexDirection: 'row',
          flex: 3
        }]}>
          <div style={[{flex: 1}, centerText, button]}>dislik</div>
          <div style={[{flex: 1, borderLeft: '0px !important'}, centerText, button]}>like</div>
        </div>
        <div style={[{flex: 1, background: '#FFE2FF' }, centerText, progressbar]}>Progressbar</div>
        <div style={[{
          display: 'flex',
          flexDirection: 'column',
          flexDirection: 'row',
          flex: 1,
          borderBottom: '0px !important'
        }, button]}>
          <div style={[{flex: 1}, centerText]}>artist</div>
          <div style={[{flex: 1}, centerText]}>title</div>
        </div>
        <div style={[{flex: 2}, centerText, button]}>Play/Pause</div>
      </div>
    )
  }
}

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
