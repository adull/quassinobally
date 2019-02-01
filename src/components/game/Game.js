import React from 'react';
import Header from '../header/Header';
import Boxes from '../boxes/Boxes';
// import Buttons from '../buttons/Buttons';
import Buttons from '../../containers/Buttons';

import HTML5Backend from 'react-dnd-html5-backend';

import { DragDropContextProvider } from 'react-dnd';



class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      backend: null
    }
  }
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="game-root">
          <Header />
          <Boxes />
          <Buttons />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default Game;
