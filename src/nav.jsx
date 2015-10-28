import React,  { Component } from "react"
import Radium                from 'radium'
import { connect }           from 'react-redux'
import { closeModals, openShortcuts, openUpload, openFeedback } from './store/view.jsx'

@Radium
class Nav extends Component {
  render() {
    const children = this.props.children.map((child, i) => {
      return <div style={[{flex: 1}]} key={i} >{child}</div>
    })

    return (
          <nav style={[{
            display: 'flex',
            position: 'fixed',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: 0,
            justifyContent: 'center',
            left: 0,
            maxWidth: '44em',
            right: 0,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 300,
            lineHeight: '3em',
            display: 'flex'
          }]}>
          { children }
          </nav>
      )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    openShortcuts: () => dispatch(openShortcuts()),
    openUpload:    () => dispatch(openUpload()),
    openFeedback:  () => dispatch(openFeedback())
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  render() {
    return (
      <Nav>
        <div onClick={this.props.openShortcuts}>shortcuts</div>
        <div onClick={this.props.openUpload}>upload</div>
        <div onClick={this.props.openFeedback}>feedback</div>
      </Nav>
    )
  }
}

