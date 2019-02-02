import React from 'react'
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return state;
}

class Background extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: ''
    }
    this.backgroundColor = this.backgroundColor.bind(this);
  }

  backgroundColor() {
    console.log(this.props);
    // return "blue"
    this.setState({
      backgroundColor: "blue"
    })
  }

  render() {
    let red = (parseInt(255 - this.props.backgroundColor[0])).toString()
    let green = (parseInt(255 - this.props.backgroundColor[1])).toString()
    let blue = (parseInt(255 - this.props.backgroundColor[2])).toString()
    let bgColor = "rgb(" + red + ", " + green + "," + blue + ")"
    console.log(this.props.backgroundColor)
    return(
      <div className="background" style={{backgroundColor:  bgColor}}>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Background);
