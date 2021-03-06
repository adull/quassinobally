import React from 'react';
import * as appLaws from '../game/AppLaws'
import * as gameLaws from '../game/GameLaws'

import ModalButton from '../../containers/ModalButton';

class IncorrectSolution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reasonIncorrect: props.reasonIncorrect,
      incorrectString: ''
    }
    this.goHome = this.goHome.bind(this);
  }
  componentWillMount() {
    let reasonIncorrect = this.state.reasonIncorrect;
    if(reasonIncorrect === "characters") {
      this.setState({
        incorrectString: "You must use all of the characters in the character box in your solution."
      })
    }
    else if(reasonIncorrect === "invalid") {
      this.setState({
        incorrectString: "There is a problem with your solution. Make sure you include an operand in between each letter and have used any parentheses correctly."
      })
    }
    else if(reasonIncorrect === "miscalculation") {
      this.setState({
        incorrectString: "There was a problem with the computation."
      })
    }

    else {
      console.log(reasonIncorrect);
    }
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
                Incorrect Solution.
              </div>
              <div className="modal-subtitle">
                {this.state.incorrectString}
              </div>
            </div>
            <div className="correct-buttons">
              <ModalButton onClick={this.props.closeModal} text="Retry" />
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

export default IncorrectSolution;
