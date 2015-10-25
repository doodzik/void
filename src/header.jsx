import React,  { Component } from "react"
import Radium from 'radium'

@Radium
export default class Header extends Component {
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
