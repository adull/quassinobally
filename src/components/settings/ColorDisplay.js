import React from 'react';

class ColorDisplay extends React.Component {
  constructor() {
    super();

  }
  render() {
    let red = (parseInt(255 - this.props.red)).toString()
    let green = (parseInt(255 - this.props.green)).toString()
    let blue = (parseInt(255 - this.props.blue)).toString()
    let boxColor = "rgb(" + red + ", " + green + "," + blue + ")"
    return (
      <div className="color-display" style={{backgroundColor: boxColor}}>
        <div style={{color: boxColor}}>nut</div>
      </div>
    )
  }
}

export default ColorDisplay;
