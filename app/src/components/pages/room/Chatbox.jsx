import React from 'react';

export default class ChatBox extends React.Component{
  constructor(props){
    super(props);        
  }
   
  
  render(){    
    var renderMessages = this.props.messages.map(function(message, index){
      console.log(message);
        return (
          <li className="chat-line" key={index}>
            {message.username}: {message.msg}
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