import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import request from 'superagent';
// Components
import Main from 'Main';
import Home from 'Home';
import Room from 'Room';
import Error404 from 'Error404';
// Redux
import store from './store/store';
import {Provider} from 'react-redux';
// SCSS
import "!style-loader!css-loader!sass-loader!./stylesheets/main.scss";


var validateRoom = (nextState, replace, callback) => {
  
  request
    .post('/api/validate-room')
    .send({roomId: nextState.params.roomId})
    .set('Accept', 'application/json')
    .end(function(err,res){
      if(err){console.log(err)};
      if(res){
        if(res.body.success){
          console.log(res.body);
          callback();
        } else {
          replace('error404');
          callback();
        }
      }
    })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="room/:roomId" onEnter={validateRoom} component={Room} />
            <Route path="error404" component={Error404} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)