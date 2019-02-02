import React from 'react';
import Button from '../components/buttons/Button';
// import Button from './Button';
import Modal from '../components/modal-content/Modal';
import CorrectSolution from '../components/modal-content/CorrectSolution';
import IncorrectSolution from '../components/modal-content/IncorrectSolution';

import { connect } from 'react-redux';

import * as actions from '../actions';

function mapStateToProps(state, ownProps) {
  return state;
}

class Buttons extends React.Component {
  render() {
    let dispatch = this.props.dispatch;
    return(
      <div className="buttons">
        <Button type="new-word" />
        <Button dispatch={dispatch} type="submit" />
        <Button type="three" />
        <Modal show={this.props.correctSubmittedAnswer || this.props.incorrectSubmittedAnswer}>
          <CorrectSolution dispatch={dispatch} show={this.props.correctSubmittedAnswer} />
          <IncorrectSolution show={this.props.incorrectSubmittedAnswer} />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Buttons);
