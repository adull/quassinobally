import React from 'react';

import { connect } from 'react-redux';

// import * as gameLaws from '../components/game/GameLaws';
import * as gameLaws from '../game/GameLaws';
import * as appLaws from '../game/AppLaws';

import gunSound from '../../assets/audio/gun.wav';

function mapStateToProps(state, ownProps) {
  return state;
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    // console.log("click")
    let gunAudio = new Audio(gunSound);
    gunAudio.play();
    if(this.props.type === "new-word") {
      // console.log(this.props.dispatch);
      gameLaws.newPuzzle(this.props.dispatch)
    }
    else if(this.props.type === "submit") {
      // console.log(this.props)
      gameLaws.submitAnswer(this.props);
    }
    else if(this.props.type === "dictionary") {
      appLaws.toggleDictionary(this.props.dispatch);
    }
  }

  render() {
    return(
      <div className={"button"} onClick={this.click}>
        {this.props.text}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Button);
