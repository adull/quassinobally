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
      <BrowserRouter basename={'/quassinobally'}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Game} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppController;
