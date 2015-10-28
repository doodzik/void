import React,  { Component } from "react"
import Radium                from 'radium'
import { connect }           from 'react-redux'

import { startAnimation, stopAnimation, logo } from './store/logo.jsx'

import Nav    from './nav.jsx'
import Tags   from './tags.jsx'
import Player from './player.jsx'
import Header from './header.jsx'
import Modals from './modal.jsx'

function mapStateToProps(state) {
  return { logo: state.logo }
}

function mapDispatchToProps(dispatch) {
  return {
    startAnimation: () => {
      dispatch(startAnimation())
      setTimeout(() => { 
        dispatch(stopAnimation()) 
      }, 2000)
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@Radium
export default class App extends Component {
  render() {
    var tag_style    = {opacity: 1, transition: '2s'}
    var header_style = {opacity: 1, transition: '500ms'}
    var player_style = {opacity: 0, transition: '500ms'}
    console.log(this.props.logo)
    if (this.props.logo == logo.RUNNING) {
      tag_style.transform = 'translateY(-23em)'
      header_style.opacity = 0
    } else if (this.props.logo == logo.ENDED) {
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
        <Tags style={[tag_style]} triggerSearched={this.props.startAnimation} />
        <Player style={[player_style]}/>
      </div>
    )
  }
}
