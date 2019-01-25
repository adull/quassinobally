import React from 'react';
// import Box from './Box';
import Box from '../../containers/Box';

class LetterBox extends Box {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Box type="letter" />
    );
  }
}
export default LetterBox;
