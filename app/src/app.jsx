import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
// Components
import Main from 'Main';
import Home from 'Home';
// Redux
import store from './store/store'
import {Provider} from 'react-redux';

import "!style-loader!css-loader!sass-loader!./stylesheets/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)