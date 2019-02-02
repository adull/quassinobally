import React from 'react';
import Header from '../header/Header';
import Boxes from '../boxes/Boxes';
// import Buttons from '../buttons/Buttons';
import Buttons from '../../containers/Buttons';



class Game extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
        <div className="game-root">
          <Header />
          <Boxes />
          <Buttons />
        </div>
    );
  }
}

export default Game;
