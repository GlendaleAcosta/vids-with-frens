import React from 'react';
import io from 'socket.io-client';

export default class Chatbox extends React.Component{
  constructor(props){
    super(props);
  }
  onSubmit = (e) => {
    e.preventDefault();
    var {socket} = this.props;
    
    var msg = this.refs.msg.value;
    socket.emit('chat message', msg);
  }
  render(){
    return (
      <form onSubmit={this.onSubmit} className="col-7 form-inline"> 
          <input ref="msg" className="form-control col-10" type="text"/>
          <button type="submit" className="btn btn-primary col-2">Send</button>
      </form>
    )
  }
}