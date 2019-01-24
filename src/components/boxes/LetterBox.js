import React from 'react';
import Box from './Box';

class LetterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      word: this.randomWord(),
      droppable: ["letter"]
    }
  }

  randomWord() {
    let words = ["shit", "dad", "how", "man"]
    return words[Math.floor(Math.random() * words.length)];
  }

  render() {
    return(
      <Box type="letter" value={this.state.word} />
    );
  }
}
export default LetterBox;
