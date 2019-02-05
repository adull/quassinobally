import React from 'react'
import Header from './Header';
import ColorPicker from '../components/settings/ColorPicker'
import ColorDisplay from '../components/settings/ColorDisplay'
import Range from '../components/settings/Range';
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
    this.updateHomeBtnBgColor = this.updateHomeBtnBgColor.bind(this);
    this.updateHomeBtnColor = this.updateHomeBtnColor.bind(this);
    this.updateHomeBtnBorderColor = this.updateHomeBtnBorderColor.bind(this);
    this.updateHomeBtnBorderWidth = this.updateHomeBtnBorderWidth.bind(this);
    this.updateBoxBorderWidth = this.updateBoxBorderWidth.bind(this);
  }

  updateBackgroundColor(color) {
    appLaws.setBackgroundColor(color, this.props.dispatch)
  }

  updateBoxColor(color) {
    appLaws.setBoxColor(color, this.props.dispatch)
  }

  updateBoxBorderWidth(width) {
    appLaws.setBoxBorderWidth(width, this.props.dispatch)
  }

  updateLetterColor(color) {
    appLaws.setLetterColor(color, this.props.dispatch)
  }

  updateBoxBorderColor(color) {
    appLaws.setBoxBorderColor(color, this.props.dispatch)
  }

  updateHomeBtnBgColor(color) {
    appLaws.setHomeBtnBgColor(color, this.props.dispatch)
  }

  updateHomeBtnColor(color) {
    appLaws.setHomeBtnColor(color, this.props.dispatch)
  }

  updateHomeBtnBorderColor(color) {
    appLaws.setHomeBtnBorderColor(color, this.props.dispatch)
  }

  updateHomeBtnBorderWidth(width) {
    appLaws.setHomeBtnBorderWidth(width, this.props.dispatch)
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

    let boxBorderWidth = this.props.boxBorderWidth;

    let boxBorderRed = this.props.boxBorderColor[0];
    let boxBorderGreen = this.props.boxBorderColor[1];
    let boxBorderBlue = this.props.boxBorderColor[2];

    let homeBtnBgRed = this.props.homeBtnBgColor[0];
    let homeBtnBgGreen = this.props.homeBtnBgColor[1];
    let homeBtnBgBlue = this.props.homeBtnBgColor[2];

    let homeBtnRed = this.props.homeBtnColor[0];
    let homeBtnGreen = this.props.homeBtnColor[1];
    let homeBtnBlue = this.props.homeBtnColor[2];

    let homeBtnBorderRed = this.props.homeBtnBorderColor[0];
    let homeBtnBorderGreen = this.props.homeBtnBorderColor[1];
    let homeBtnBorderBlue = this.props.homeBtnBorderColor[2];

    let homeBtnBorderWidth = this.props.homeBtnBorderWidth;

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
          <div className="box-border-width">
            Box Border Width
          </div>
          <Range step="1" min="0" max="15" value={boxBorderWidth} updateVal={this.updateBoxBorderWidth} />
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
          <div className="home-button-background-color">
            Home Button Background Color
          </div>
          <ColorPicker red={homeBtnBgRed} green={homeBtnBgGreen} blue={homeBtnBgBlue} updateColor={this.updateHomeBtnBgColor} />
          <ColorDisplay red={homeBtnBgRed} green={homeBtnBgGreen} blue={homeBtnBgBlue}/>
          <div className="home-button-background-color">
            Home Button Text Color
          </div>
          <ColorPicker red={homeBtnRed} green={homeBtnGreen} blue={homeBtnBlue} updateColor={this.updateHomeBtnColor} />
          <ColorDisplay red={homeBtnRed} green={homeBtnGreen} blue={homeBtnBlue}/>
          <div className="home-button-background-color">
            Home Button Border Color
          </div>
          <ColorPicker red={homeBtnBorderRed} green={homeBtnBorderGreen} blue={homeBtnBorderBlue} updateColor={this.updateHomeBtnBorderColor} />
          <ColorDisplay red={homeBtnBorderRed} green={homeBtnBorderGreen} blue={homeBtnBorderBlue}/>
          <div className="home-button-border-width">
            Home Button Border Width
          </div>
          <Range step="1" min="0" max="10" value={homeBtnBorderWidth} updateVal={this.updateHomeBtnBorderWidth} />

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Settings);
