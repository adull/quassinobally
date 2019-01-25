import React from 'react';
// import Box from './Box';
import Box from '../../containers/Box';

class OperandBox extends React.Component {
  constructor() {
    super();
    this.state = {
      operands: "+-×÷",
      droppable: ["operand"]
    }
  }
  render() {
    return(
      <Box type="operand" value={this.state.operands} />
    );
  }
}
export default OperandBox;
