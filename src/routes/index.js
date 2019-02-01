import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Game from '../components/game/Game.js';
import PageController from '../containers/PageController';

console.log(Game)
console.log(PageController)

class AppController extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // start here next time app controller should render `PageController`
  // but (i think) redux is getting in the way of the backend being mounted
  // properly.
  render() {
    return(
      <Game />
    )
  }
}

export default AppController;
