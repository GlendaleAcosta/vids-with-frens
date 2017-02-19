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
    console.log("RENDER: CHATBOX");
    return (
      <div className="chat-form">
        <form onSubmit={this.onSubmit} className="col-12 form-inline"> 
            <input ref="msg" className="form-control col-9" type="text" placeholder="Send a message"/>
            <button type="submit" className="btn btn-primary col-3">Send</button>
        </form>
      </div>
    )
  }
}