import React from 'react'
import Header from './Header';
import ColorPicker from '../components/settings/ColorPicker'
import ColorDisplay from '../components/settings/ColorDisplay'
import Background from './Background'

import { connect } from 'react-redux';

import * as appLaws from '../components/game/AppLaws';

function mapStateToProps(state, ownProps) {
  return state;
}

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "rgb(0,0,0)"
    }

    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
  }

  updateBackgroundColor(color) {
    appLaws.setBackgroundColor(color, this.props.dispatch)
  }

  render() {
    console.log(this.props)
    let red = this.props.backgroundColor[0];
    let green = this.props.backgroundColor[1];
    let blue = this.props.backgroundColor[2];
    console.log(red)
    return(
      <div className="page settings-page">
        <Header />
        <Background />
        <div className="settings-modifier">
          <div className="background-color">
            Background Color
          </div>
          <ColorPicker red={red} green={green} blue={blue} updateColor={this.updateBackgroundColor}/>
          <ColorDisplay value="background"/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Settings);
