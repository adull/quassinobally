import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Game from '../components/game/Game.js';

class AppController extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Game} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppController;
