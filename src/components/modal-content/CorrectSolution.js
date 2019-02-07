import React from 'react';
import * as gameLaws from '../game/GameLaws';
import * as appLaws from '../game/AppLaws';

import ModalButton from '../../containers/ModalButton';

class CorrectSolution extends React.Component {
  constructor() {
    super();
    this.newPuzzle = this.newPuzzle.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  newPuzzle() {
    gameLaws.newPuzzle(this.props.dispatch);
  }
  goHome() {
    appLaws.setPage('home', this.props.dispatch);
    gameLaws.newPuzzle(this.props.dispatch);
  }
  render() {
    if(this.props.show) {
      return(
        <div className="modal-content">
          <div className="modal-title-section">
            <div className="modal-title">
              Correct solution!
            </div>
          </div>
          <div className="correct-buttons">
            <ModalButton onClick={this.newPuzzle} text="Another Puzzle" />
            <ModalButton onClick={this.goHome} text="Home" />
          </div>
        </div>
      )
    }
    else {
      return null;
    }

  }
}

export default CorrectSolution;
