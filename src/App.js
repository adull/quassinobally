import React from 'react';
import Routes from './routes';
// import AppController from './containers/AppController';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { isBrowser, isMobile } from 'react-device-detect';

import { DragDropContextProvider } from 'react-dnd';

class App extends React.Component {
  render() {
    if(isBrowser) {
      console.log("is browser")
      return(
        <DragDropContextProvider backend={HTML5Backend}>
          <Routes />
        </DragDropContextProvider>
      )
    }
    else if(isMobile) {
      console.log("is mobile")
      return(
        <DragDropContextProvider backend={TouchBackend}>
          <Routes />
        </DragDropContextProvider>
      )
    }
  }
}

export default App
