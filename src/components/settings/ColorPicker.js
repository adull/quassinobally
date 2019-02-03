import React from 'react';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.updateRedVal = this.updateRedVal.bind(this);
    this.updateBlueVal = this.updateBlueVal.bind(this);
    this.updateGreenVal = this.updateGreenVal.bind(this);
  }

  updateColor(red, green, blue) {
    let rgbArray = [red, green, blue]
    this.props.updateColor(rgbArray)
  }

  updateRedVal(event) {
    // console.log("update rede val")
    let red = event.target.value;
    let green = this.props.green;
    let blue = this.props.blue;
    this.updateColor(red, green, blue)
  }

  updateGreenVal(event) {
    let red = this.props.red;
    let green = event.target.value;
    let blue = this.props.blue;
    this.updateColor(red, green, blue)
  }

  updateBlueVal(event) {
    let red = this.props.red;
    let green = this.props.green;
    let blue = event.target.value;
    this.updateColor(red, green, blue)
  }



  render() {
    return(
      <div className="color-picker">
        <input type="range" className="color-selector" step="1" min="0" max="255" value={this.props.red} onChange={this.updateRedVal} />
        <input type="range" className="color-selector" step="1" min="0" max="255" value={this.props.green} onChange={this.updateGreenVal} />
        <input type="range" className="color-selector" step="1" min="0" max="255" value={this.props.blue} onChange={this.updateBlueVal} />
      </div>
    )
  }
}

export default ColorPicker;
