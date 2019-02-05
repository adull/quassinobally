import React from 'react';
import Header from '../../containers/Header';
import Boxes from '../boxes/Boxes';
import Buttons from '../../containers/Buttons';
import Background from '../../containers/Background';



class Game extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="page game-root">
        <Header />
        <Background />
        <Boxes />
        <Buttons />
      </div>
    );
  }
}

export default Game;
