import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PageController from '../containers/PageController';

class AppController extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    console.log(process.env.PUBLIC_URL)
    return(
      // <PageController />
      <BrowserRouter basename={'/quassinobally'}>
        <Route exact path={'/quassinobally'} component={PageController} />
      </BrowserRouter>
    )
  }
}

export default AppController;
