import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/home/Home';
import Game from '../components/game/Game';
import Instructions from '../components/instructions/Instructions';

const mapStateToProps = state => {
  return state;
}

class PageController extends React.Component {
  render() {
    console.log(this.props)
    if(this.props.showHome) {
      return(
        <Home dispatch={this.props.dispatch}/>
      )
    }
    if(this.props.showGame) {
      return(
        <Game dispatch={this.props.dispatch}/>
      )
    }
    if(this.props.showInstructions) {
      return(
        <Instructions dispatch={this.props.dispatch}/>
      )
    }

  }
}

export default connect(mapStateToProps)(PageController);
