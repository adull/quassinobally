import React from 'react';

import { connect } from 'react-redux';

// import * as gameLaws from '../components/game/GameLaws';
import * as gameLaws from '../game/GameLaws';

function mapStateToProps(state, ownProps) {
  return state;
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    let buttonText = this.props.type
      .replace(/-/g, ' ')
      .replace(/^./, function(x){return x.toUpperCase()})

    this.state = {
      type: buttonText
    }
    this.click = this.click.bind(this);
  }

  click() {
    if(this.state.type === "New word") {
      // console.log(this.props.dispatch);
      gameLaws.newPuzzle(this.props.dispatch)
    }
    if(this.state.type === "Submit") {
      // console.log(this.props)
      gameLaws.submitAnswer(this.props);
    }
  }

  render() {
    return(
      <div className={"button " + this.state.type} onClick={this.click}>
        {this.state.type}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Button);
