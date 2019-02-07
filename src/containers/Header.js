import React from 'react';
import { connect } from 'react-redux';
import * as appLaws from '../components/game/AppLaws';

import cockSound from '../assets/audio/cock.wav';

function mapStateToProps(state, ownProps) {
  return state;
}

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
    this.setPageHome = this.setPageHome.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  setPageHome() {
    let cockAudio = new Audio(cockSound);
    cockAudio.play();
    appLaws.setPage('home', this.props.dispatch)
  }

  render() {
    let bgRed = (parseInt(255 - this.props.backHomeBtnBgColor[0])).toString()
    let bgGreen = (parseInt(255 - this.props.backHomeBtnBgColor[1])).toString()
    let bgBlue = (parseInt(255 - this.props.backHomeBtnBgColor[2])).toString()
    let bgColor = "rgb(" + bgRed + ", " + bgGreen + "," + bgBlue + ")"
    let linkStyle = '';
    if (this.state.hover) {
      linkStyle = {backgroundColor: bgColor}
    } else {
      linkStyle = {backgroundColor: 'transparent'}
    }
    return(
      <div className="header">
        <div className="header-back-button" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.setPageHome} style={linkStyle}>
          <img src={require('../assets/svg/back.svg')} alt="back-bitch"/>
          <div className="header-back-button-text">Home</div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(Header);
