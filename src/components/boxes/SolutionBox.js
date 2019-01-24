import React from 'react';
import Box from './Box';

class SolutionBox extends React.Component {
  constructor() {
    super();
    this.state = {
      droppable: ["operand", "letter"]
    }
  }
  render() {
    return(
      <Box type="solution" value=""/>
    );
  }
}
export default SolutionBox;
