import React from 'react';

export default class ChatBox extends React.Component{
  constructor(props){
    super(props);        
  }
   
  
  render(){
    console.log("RENDER CHAT");
    console.log(this.props.messages);
    
    var renderMessages = this.props.messages.map(function(message, index){
        return <p key={index}>{message.username}: {message.message}</p>
      })
    return (
      <div className="chat-box">
        {renderMessages}
      </div>
    )
  }
}