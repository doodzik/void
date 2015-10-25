import React,  { Component } from "react"
import Radium from 'radium'

@Radium
export default class Player extends Component {
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
