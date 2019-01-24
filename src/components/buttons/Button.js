import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type
    }
  }
  render() {
    return(
      <div className={"button " + this.state.type}>
        {this.state.type}
      </div>
    )
  }
}

export default Button;
