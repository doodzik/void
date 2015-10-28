import React,  { Component } from "react"
import Modal from 'react-modal'

export default class Shortcut extends Component {
  render() {
    return (
        <Modal
          isOpen={ this.props.isOpen('SHORTCUTS') }
          onRequestClose={this.props.closeModals}
         >

          <h2>Hello</h2>
          <button onClick={this.props.closeModals}>close</button>
          <div>I am a Shortcut</div>
        </Modal>
    )
  }
}
