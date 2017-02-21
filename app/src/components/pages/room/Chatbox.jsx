import React from 'react';

export default class ChatBox extends React.Component{
  constructor(props){
    super(props);        
  }
   
  
  render(){    
    var renderMessages = this.props.messages.map(function(message, index){
        return (
          <li className="chat-line" key={index}>
            {message.username}: {message.message}
          </li>
        )
      })
    return (
      <div className="chat-box">
        <ul className="chat-list">
          {renderMessages}
        </ul>
      </div>
    )
  }
}