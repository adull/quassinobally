import React from 'react';
import Button from '../components/buttons/Button';
// import Button from './Button';
import Modal from '../components/modal-content/Modal';
import CorrectSolution from '../components/modal-content/CorrectSolution';
import IncorrectSolution from '../components/modal-content/IncorrectSolution';
import Dictionary from '../components/modal-content/Dictionary';

import { connect } from 'react-redux';

import * as actions from '../actions';
import * as appLaws from '../components/game/AppLaws';

function mapStateToProps(state, ownProps) {
  return state;
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.closeIncorrectModal = this.closeIncorrectModal.bind(this);
    this.closeDictionaryModal = this.closeDictionaryModal.bind(this);
  }

  closeIncorrectModal() {
    appLaws.closeIncorrectModal(this.props.dispatch)
  }

  closeDictionaryModal() {
    appLaws.toggleDictionary(this.props.dispatch)
  }

  render() {
    console.log()
    let dispatch = this.props.dispatch;
    return(
      <div className="buttons">
        <Button type="new-word" text="New Word"/>
        <Button dispatch={dispatch} type="submit" text="Submit"/>
        <Button type="dictionary" text="Dictionary"/>
        <Modal show={this.props.correctSubmittedAnswer || this.props.incorrectSubmittedAnswer || this.props.showDictionary}>
          <CorrectSolution dispatch={dispatch} show={this.props.correctSubmittedAnswer} />
          <IncorrectSolution reasonIncorrect={this.props.reasonIncorrect} dispatch={dispatch} closeModal={this.closeIncorrectModal} show={this.props.incorrectSubmittedAnswer} />
          <Dictionary show={this.props.showDictionary} closeModal={this.closeDictionaryModal}/>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Buttons);
