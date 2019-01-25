import React from 'react';
// import Box from './Box';
import Box from '../../containers/Box';

class LetterBox extends Box {
  constructor(props) {
    super(props);
    this.state = {
      word: this.randomWord(),
      droppable: ["letter"]
    }

  }

  randomWord() {
    let words = ["shit", "man", "child", "kill"]
    return words[Math.floor(Math.random() * words.length)];
  }

  render() {
    return(
      <Box type="letter" value={this.state.word} />
    );
  }
}
export default LetterBox;
