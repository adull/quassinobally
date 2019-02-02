import React from 'react';

function decToHex(integer) {
  // console.log ( (10).toString(16) === "a" ); // true
  return integer.toString(16);

}

function rgbToHex(r, g, b) {
    return "#" + decToHex(r) + decToHex(g) + decToHex(b);
}

class ColorPicker extends React.Component {
  constructor() {
    super();
    // console.log(this)
    // this.state = {
    //   red: this.props.red,
    //   green: this.props.green,
    //   blue: this.props.blue
    // }
    console.log(this)
    // this.state = {
    //   red: this.props.red,
    //   green: 0,
    //   blue: 0,
    // }
    this.updateRedVal = this.updateRedVal.bind(this);
    this.updateBlueVal = this.updateBlueVal.bind(this);
    this.updateGreenVal = this.updateGreenVal.bind(this);
    // this.updateColor = this.updateColor.bind(this);
  }

  updateColor(red, green, blue) {
    // let r = this.props.red;
    // let g = this.props.green;
    // let b = this.props.blue;
    // console.log(rgbToHex(r, g, b));
    let rgbArray = [red, green, blue]
    this.props.updateColor(rgbArray)
  }

  updateRedVal(event) {
    let red = event.target.value;
    let green = this.props.green;
    let blue = this.props.blue;
    console.log(red)
    console.log(this.props)
    // this.setState({
    //   red: event.target.value
    // })
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
    // console.log(this.props)
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
