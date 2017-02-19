import React from 'react';
import ChatContainer from 'ChatContainer';

export default class Room extends React.Component{
  constructor(props){
    super(props);     
  }
  

  render(){
    console.log("RENDER: ROOM");
    return (
      <div className="full-screen">
        <ChatContainer/>
      </div>
    )
  }
}