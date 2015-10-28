import React, { Component } from "react"
import Modal                from 'react-modal'

export default class Upload extends Component {
  render() {
    return (
        <Modal
          isOpen={ this.props.isOpen('UPLOAD') }
          onRequestClose={this.props.closeModals}
         >

          <h2>Hello</h2>
          <button onClick={this.props.closeModals}>close</button>
          <div>I am a Upload</div>
        </Modal>
    )
  }
}
