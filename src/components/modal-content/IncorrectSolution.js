import React from 'react';
import * as appLaws from '../game/AppLaws'
import * as gameLaws from '../game/GameLaws'

class IncorrectSolution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectReason: props.incorrectReason
    }
    this.constructSubtitle = this.constructSubtitle.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  constructSubtitle() {
    let incorrectReason = this.state.incorrectReason
    if(incorrectReason === "invalid") {
      return "There is a problem with your solution. Make sure you include an operand in between each letter and have used any parentheses correctly."
    }
    else if(incorrectReason === "computation") {
      return "There was a problem with the computation."
    }
  }
  goHome() {
    appLaws.setPage('home', this.props.dispatch);
    gameLaws.newPuzzle(this.props.dispatch);
  }
  render() {
    if(this.props.show) {
      console.log("show")
      return(
          <div className="modal-content">
            <div className="modal-title-section">
              <div className="modal-title">
                Incorrect Solution.
              </div>
              <div className="modal-subtitle">
                {this.constructSubtitle}
              </div>
            </div>
            <div className="correct-buttons">
              <div className="button close" onClick={this.props.closeModal}>
                Retry
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

export default IncorrectSolution;
