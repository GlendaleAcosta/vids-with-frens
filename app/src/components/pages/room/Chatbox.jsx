import React from 'react';
import io from 'socket.io-client';
var socket = io('/');

export default class Chatbox extends React.Component{
  
  render(){
    return (
      <form className="col-7 form-inline"> 
          <input className="form-control col-10" type="text"/>
          <button className="btn btn-primary col-2">Send</button>
      </form>
    )
  }
}