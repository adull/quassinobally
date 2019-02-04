import React from 'react';

class Range extends React.Component {
  constructor() {
    super();
    this.updateVal = this.updateVal.bind(this);
  }

  updateVal(event) {
    this.props.updateVal(event.target.value)
  }

  render() {
    return (
      <input type="range" step={this.props.step} min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.updateVal} />
    )
  }
}

export default Range;
