import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Game from '../components/game/Game.js';
import PageController from '../containers/PageController';

class AppController extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <PageController />
    )
  }
}

export default AppController;
