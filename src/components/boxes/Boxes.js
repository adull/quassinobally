import React from 'react';
import LetterBox from './LetterBox';
import OperandBox from './OperandBox';
import SolutionBox from './SolutionBox';

class Boxes extends React.Component {
  render() {
    return(
      <div className="boxes">
        <LetterBox />
        <OperandBox />
        <SolutionBox />
      </div>
    );
  }
}
export default Boxes;
