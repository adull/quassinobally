import React from 'react';
import {Router, Route} from 'react-router-dom';
import PageController from '../containers/PageController';

class AppController extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      // <PageController />
      <Router basename={'/quassinobally'}>
        <Route exact path="/" component={PageController} />
      </Router>
    )
  }
}

export default AppController;
