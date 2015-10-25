import React,  { Component } from "react"
import Modal from 'react-modal'
import Radium from 'radium'

require('./modal.css')

@Radium
export default class Nav extends Component {

  constructor() {
    super()
    return { modalIsOpenFeedback: false, modalIsOpenShortcut: false };
  }

  openModalFeedback() {
    this.setState({modalIsOpenFeedback: true});
  }

  closeModalFeedback() {
    this.setState({modalIsOpenFeedback: false});
  }

  openModalShortcut() {
    this.setState({modalIsOpenShortcut: true});
  }

  closeModalShortcut() {
    this.setState({modalIsOpenShortcut: false});
  }

render() {
  return (
    <div>
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
          <div style={[{flex: 1}]} onClick={this.openModalShortcut.bind(this)}>shortcuts</div>
          <div style={[{flex: 1}]}>void</div>
          <div style={[{flex: 1}]} onClick={this.openModalFeedback.bind(this)}>feedback</div>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpenShortcut}
          onRequestClose={this.closeModalShortcut.bind(this)}
         >

          <h2>Hello</h2>
          <button onClick={this.closeModalShortcut.bind(this)}>close</button>
          <div>I am a Shortcut</div>
        </Modal>

        <Modal
          isOpen={this.state.modalIsOpenFeedback}
          onRequestClose={this.closeModalFeedback.bind(this)}
         >

          <h2>Hello</h2>
          <button onClick={this.closeModalFeedback.bind(this)}>close</button>
          <div>I am a Feedback</div>
        </Modal>
      </div>
      )
  }
}

