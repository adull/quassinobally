import React from 'react';

import cockSound from '../assets/audio/cock.wav';

class ModalButton extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }
  click() {
    let cockAudio = new Audio(cockSound);
    cockAudio.play();
    this.props.onClick();
  }
  render() {
    return (
      <div className="button" onClick={this.click}>
        {this.props.text}
      </div>
    )
  }
}

export default ModalButton;
