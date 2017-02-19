import React from 'react';
import ChatForm from 'ChatForm';
import ChatBox from 'ChatBox';
import io from 'socket.io-client'
var socket = io('http://localhost:3030');

export default class ChatContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    var that = this;
    socket.on('chat', function(msg){      
      var messages = that.state.messages;
      var message = {
        username: "Glendale",
        message: msg
      }
      messages.push(message);
      that.setState({
        messages: messages
      })
    });

  }
  
  render(){
    var {messages} = this.state;
    return(
      <div className="chat-container">
          <ChatBox socket={socket} messages={messages}/>
          <ChatForm socket={socket} />
      </div>
    )
  }
}