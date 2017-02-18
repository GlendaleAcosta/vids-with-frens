import React from 'react';
import Chat from 'Chat';
import Chatbox from 'Chatbox';
import io from 'socket.io-client'
var socket = io('http://localhost:3030');

export default class Room extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="pt-5 container text-center">
          <h1 className="display-3">Room Component</h1> 
          <Chat socket={socket}/>
          <Chatbox socket={socket}/>
        </div>
      </div>
    )
  }
}