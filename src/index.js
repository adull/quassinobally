import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import './index.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import reducer from './reducers'
import { addChar, removeChar, submitAns } from './actions'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
