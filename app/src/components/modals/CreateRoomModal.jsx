import React from 'react';
import request from 'superagent';

export default class CreateRoomModal extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    var that = this;
    var username = this.refs.username.value;
    window.sessionStorage.setItem('username', username);

    request
      .post('/api/room')
      .send({ username: username })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err){console.log(res)};
        if(res){
          that.refs.username.value = "";
          that.refs.username.placeholder = "";
          console.log(res);

        }
      })
  }

  render(){
    return (
      <div className="card-block">
        <h4 className="card-title">Your name please.</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter a username:</label>
            <input ref="username" className="mb-2 form-control" type="text" placeholder="John Snow"/>
            <button className="btn btn-primary form-control" type="submit">Create Room</button>
          </div>
        </form>
      </div>
    )
  }
}