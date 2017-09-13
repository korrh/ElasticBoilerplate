import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
//import {  browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { createBrowserHistory } from 'history';

//import Layout from "./components/Layout"
import store from "./store";
import App from "./components/App";


const app = document.getElementById('app');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
  <Provider store={store} history={history}>
    <Router >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  app
);
