import React from 'react';
// import Box from './Box';
import Box from '../../containers/Box';

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
