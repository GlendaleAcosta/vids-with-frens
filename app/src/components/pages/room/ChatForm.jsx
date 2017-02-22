import React from 'react';

export default class ChatForm extends React.Component{
  constructor(props){
    super(props);
    
  }
  onSubmit = (e) => {
    e.preventDefault();
    
    var {socket} = this.props;
    var msg = this.refs.msg.value;
    socket.emit('chat message', msg)
    this.refs.msg.value = "";
  }
  render(){
    return (
      <div className="chat-form">
        <form onSubmit={this.onSubmit} className="col-12 form-inline"> 
            <input ref="msg" className="form-control col-9 chat-input br-0" type="text" placeholder="Send a message"/>
            <button type="submit" className="btn btn-primary col-3 chat-btn br-0">Send</button>
        </form>
      </div>
    )
  }
}