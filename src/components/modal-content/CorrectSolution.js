import React from 'react';
// import * as actions from '../../actions';
import * as gameLaws from '../game/GameLaws';
import * as appLaws from '../game/AppLaws';

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
            <div className="modal-subtitle">
              You solved the puzzle in x seconds!
            </div>
          </div>
          <div className="correct-buttons">
            <div className="button next-puzzle" onClick={this.newPuzzle}>
              Another Puzzle
            </div>
            <div className="button back-home" onClick={this.goHome}>
              Home
            </div>
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
