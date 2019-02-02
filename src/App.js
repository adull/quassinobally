import React from 'react';
import Routes from './routes';
// import AppController from './containers/AppController';
import HTML5Backend from 'react-dnd-html5-backend';

import { DragDropContextProvider } from 'react-dnd';


export default() => <DragDropContextProvider backend={HTML5Backend}><Routes /></DragDropContextProvider>;
