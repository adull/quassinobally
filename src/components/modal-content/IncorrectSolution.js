import React from 'react';

class IncorrectSolution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectReason: props.incorrectReason
    }
    this.constructSubtitle = this.constructSubtitle.bind(this);
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
  render() {
    if(this.props.show) {
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
              <div className="button close" onClick={this.props.close}>
                Close
              </div>
              <div className="button back-home">
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
