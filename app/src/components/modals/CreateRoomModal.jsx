import React from 'react';

export default class CreateRoomModal extends React.Component {

  onSubmit = (e) =>{
    e.preventDefault();
    var username = this.refs.username.value;
    
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