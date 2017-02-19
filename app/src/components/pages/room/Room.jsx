import React from 'react';
import ChatContainer from 'ChatContainer';
import io from 'socket.io-client'

export default class Room extends React.Component{
  constructor(props){
    super(props);   
    var socket = io('/', {query: {roomId: props.params.roomId}});
    this.state ={
      socket: socket
    }
  }



  render(){
    console.log("RENDER: ROOM");
    return (
      <div className="full-screen">
        <ChatContainer socket={this.state.socket} roomId={this.props.params.roomId}/>
      </div>
    )
  }
}