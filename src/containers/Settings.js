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

    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
    this.updateBoxColor = this.updateBoxColor.bind(this);
    this.updateLetterColor = this.updateLetterColor.bind(this);
    this.updateBoxBorderColor = this.updateBoxBorderColor.bind(this);
  }

  updateBackgroundColor(color) {
    appLaws.setBackgroundColor(color, this.props.dispatch)
  }

  updateBoxColor(color) {
    appLaws.setBoxColor(color, this.props.dispatch)
  }

  updateLetterColor(color) {
    appLaws.setLetterColor(color, this.props.dispatch)
  }

  updateBoxBorderColor(color) {
    appLaws.setBoxBorderColor(color, this.props.dispatch)
  }

  render() {
    let bgRed = this.props.backgroundColor[0];
    let bgGreen = this.props.backgroundColor[1];
    let bgBlue = this.props.backgroundColor[2];

    let boxRed = this.props.boxColor[0];
    let boxGreen = this.props.boxColor[1];
    let boxBlue = this.props.boxColor[2];

    let letterRed = this.props.letterColor[0];
    let letterGreen = this.props.letterColor[1];
    let letterBlue = this.props.letterColor[2];

    let boxBorderRed = this.props.boxBorderColor[0];
    let boxBorderGreen = this.props.boxBorderColor[1];
    let boxBorderBlue = this.props.boxBorderColor[2];
    return(
      <div className="page settings-page">
        <Header />
        <Background />
        <div className="settings-modifier">
          <div className="background-color">
            Background Color
          </div>
          <ColorPicker red={bgRed} green={bgGreen} blue={bgBlue} updateColor={this.updateBackgroundColor}/>
          <div className="box-color">
            Box Color
          </div>
          <ColorPicker red={boxRed} green={boxGreen} blue={boxBlue} updateColor={this.updateBoxColor}/>
          <ColorDisplay red={boxRed} green={boxGreen} blue={boxBlue}/>
          <div className="letter-color">
            Letter color
          </div>
          <ColorPicker red={letterRed} green={letterGreen} blue={letterBlue} updateColor={this.updateLetterColor} />
          <ColorDisplay red={letterRed} green={letterGreen} blue={letterBlue}/>
          <div className="letter-color">
            Box Border Color
          </div>
          <ColorPicker red={boxBorderRed} green={boxBorderGreen} blue={boxBorderBlue} updateColor={this.updateBoxBorderColor} />
          <ColorDisplay red={boxBorderRed} green={boxBorderGreen} blue={boxBorderBlue}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Settings);
