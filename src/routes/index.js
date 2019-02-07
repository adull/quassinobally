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
      <BrowserRouter basename={'/quassinobally'}>
        <Route path={`${process.env.PUBLIC_URL}/`} component={PageController} />
      </BrowserRouter>
    )
  }
}

export default AppController;
