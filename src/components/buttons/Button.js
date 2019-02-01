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
    this.state = {
      type: this.props.type
    }
    this.click = this.click.bind(this);
  }

  click() {
    console.log("clicked on " + this.state.type)
    if(this.state.type === "submit") {
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
