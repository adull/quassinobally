import React from 'react';
import Button from '../components/buttons/Button';
// import Button from './Button';
import Modal from '../components/modal-content/Modal';
import CorrectSolution from '../components/modal-content/CorrectSolution';
import IncorrectSolution from '../components/modal-content/IncorrectSolution';
import Dictionary from '../components/modal-content/Dictionary';

import { connect } from 'react-redux';

import * as appLaws from '../components/game/AppLaws';
import {arrayToRgb} from '../functions'

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
    let dispatch = this.props.dispatch;
    let buttonBgColor = arrayToRgb(this.props.gameBtnBgColor);
    let buttonBorderColor = arrayToRgb(this.props.gameBtnBorderColor);
    let buttonTextColor = arrayToRgb(this.props.gameBtnTextColor);
    let buttonBorderWidth = this.props.gameBtnBorderWidth;
    return(
      <div className="buttons">
        <Button bgColor={buttonBgColor} borderColor={buttonBorderColor} textColor={buttonTextColor} borderWidth={buttonBorderWidth} type="new-word" text="New Word"/>
        <Button bgColor={buttonBgColor} borderColor={buttonBorderColor} textColor={buttonTextColor} borderWidth={buttonBorderWidth} dispatch={dispatch} type="submit" text="Submit"/>
        <Button bgColor={buttonBgColor} borderColor={buttonBorderColor} textColor={buttonTextColor} borderWidth={buttonBorderWidth} type="dictionary" text="Dictionary"/>
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
