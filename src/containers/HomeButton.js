import React from 'react'
import { connect } from 'react-redux';

import gunSound from '../assets/audio/gun.wav';

const mapStateToProps = state => {
  return state;
}

class HomeButton extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click() {
    this.props.onClick();
    let gunAudio = new Audio(gunSound);
    gunAudio.play();
  }
  render() {
    let homeButtonBgRed = (parseInt(255 - this.props.homeBtnBgColor[0])).toString()
    let homeButtonBgGreen = (parseInt(255 - this.props.homeBtnBgColor[1])).toString()
    let homeButtonBgBlue = (parseInt(255 - this.props.homeBtnBgColor[2])).toString()
    let homeButtonBgColor = "rgb(" + homeButtonBgRed + ", " + homeButtonBgGreen + "," + homeButtonBgBlue + ")"

    let homeButtonBorderRed = (parseInt(255 - this.props.homeBtnBorderColor[0])).toString()
    let homeButtonBorderGreen = (parseInt(255 - this.props.homeBtnBorderColor[1])).toString()
    let homeButtonBorderBlue = (parseInt(255 - this.props.homeBtnBorderColor[2])).toString()
    let homeButtonBorderColor = "rgb(" + homeButtonBorderRed + ", " + homeButtonBorderGreen + "," + homeButtonBorderBlue + ")"

    let homeButtonColorRed = (parseInt(255 - this.props.homeBtnColor[0])).toString()
    let homeButtonColorGreen = (parseInt(255 - this.props.homeBtnColor[1])).toString()
    let homeButtonColorBlue = (parseInt(255 - this.props.homeBtnColor[2])).toString()
    let homeButtonColor = "rgb(" + homeButtonColorRed + ", " + homeButtonColorGreen + "," + homeButtonColorBlue + ")"

    let homeButtonBorderWidth = this.props.homeBtnBorderWidth;

    return(
      <div className="button"
           onClick={this.click}
           style={{backgroundColor: homeButtonBgColor,
                   border: homeButtonBorderWidth + "px solid " + homeButtonBorderColor,
                   color: homeButtonColor
                 }}
      >
        {this.props.buttonText}
      </div>
    )
  }
}

export default connect(mapStateToProps)(HomeButton);
