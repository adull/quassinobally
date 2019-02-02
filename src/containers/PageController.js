import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/home/Home';
import Game from '../components/game/Game';
import Instructions from '../components/instructions/Instructions';
// import Settings from '../components/settings/Settings';
import Settings from '../containers/Settings';

const mapStateToProps = state => {
  return state;
}

class PageController extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.showHome) {
      return(
        <Home dispatch={this.props.dispatch}/>
      )
    }
    else if(this.props.showGame) {
      return(
        <Game dispatch={this.props.dispatch}/>
      )
    }
    else if(this.props.showInstructions) {
      return(
        <Instructions dispatch={this.props.dispatch}/>
      )
    }
    else if(this.props.showSettings) {
      return (
        <Settings />
      )
    }
    else {
      return <div>you fuckdedup</div>
    }

  }
}

export default connect(mapStateToProps)(PageController);
