import React, { Component } from "react"
import { connect }          from 'react-redux'
import { closeModals }      from './store/view.jsx'
import Shortcut             from './modal/shortcut.jsx'
import Feedback             from './modal/feedback.jsx'
import Upload               from './modal/upload.jsx'

require('./modal/modal.css')

function stateModal(state) {
  return {
    view:   state.view,
    isOpen: view => state.view === view
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeModals: () => dispatch(closeModals())
  }
}

@connect(stateModal, mapDispatchToProps)
export default class Modals extends Component {
  render() {
    return (
      <div>
        <Shortcut {...this.props} />
        <Upload {...this.props} />
        <Feedback {...this.props} />
      </div>
    )
  }
}
