import React from 'react';
import ChatForm from 'ChatForm';
import ChatBox from 'ChatBox';

export default class ChatContainer extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    var that = this;

    this.props.socket.on('chat', function(chatLine){      
      var messages = that.state.messages;
      messages.push(chatLine);
      that.setState({
        messages: messages
      });
    });

  }
  
  render(){
    var { messages} = this.state;
    return(
      <div className="col-3 chat-container">
          <ChatBox socket={this.props.socket} messages={messages}/>
          <ChatForm socket={this.props.socket} />
      </div>
    )
  }
}