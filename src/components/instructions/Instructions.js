import React from 'react'
import Header from '../../containers/Header';
import Background from '../../containers/Background'

class Instructions extends React.Component {
  render() {
    return(
      <div className="page instructions-page" >
        <Header />
        <Background />
        <div className="instruction">
          Quassinobally is a word and math game where each word is a puzzle.
        </div>
        <div className="instruction">
          Each letter has a value attached to it based on its position in the alphabet- A = 1, B = 2, C = 3 etc.. The "Reference" button on the game page contains a reference of the value of each letter.
        </div>
        <div className="instruction">
          The object of the game is to construct an equation using all of the letters in each word that is equal to a number modulus 27 that equals 0.
        </div>
        <div className="instruction">
          That is to say, your answer must be a multiple of 27, or 0.
        </div>
        <div className="instruction">
          For example, if the starting word is "cab" c-a-b would be a solution, because the value of C = 3, A = 1, and B = 2. Thus, 3 - 1 - 2 = 0.
        </div>
        <div className="instruction">
          To construct a solution, drag the letters and operands from the letter and operand box into the solution box (the bottom box). You may use any and as many operands as you wish as long as it is a valid mathematical expression. Keep an eye on the number of operands you use.
        </div>
        <div className="instruction">
          If you wish to multiply a value, you must use the multiplication operand. For example if the puzzle you are solving is the word "dad", ((d)a - d) may seem like a correct solution at first glance, but is missing the multiplication operand. A correct solution may instead be ((d) × a - d).
        </div>
        <div className="instruction">
          In the settings page you can customize the application to your liking. ☺
        </div>
      </div>
    )
  }
}

export default Instructions;
