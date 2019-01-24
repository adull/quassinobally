import React from 'react';
import Header from '../header/Header';
import Boxes from '../boxes/Boxes';
import Buttons from '../buttons/Buttons';

import { isBrowser, isMobile } from "react-device-detect";
import TouchBackend from 'react-dnd-touch-backend';
import HTML5Backend from 'react-dnd-html5-backend';

import { DragDropContextProvider } from 'react-dnd';



class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      backend: null
    }
    if(isMobile) {
      this.state = {
        backend: TouchBackend
      }
    }
    else if (isBrowser) {
      this.state = {
        backend: HTML5Backend
      }
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

// export default DragDropContext(TouchBackend)(Game);
export default Game;
