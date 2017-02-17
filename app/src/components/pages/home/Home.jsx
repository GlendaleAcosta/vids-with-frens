import React from 'react';
import CreateRoomModal from 'CreateRoomModal';

export default class Home extends React.Component {
  constructor(props){
    super(props);

  }

  createRoom = (e) => {
    e.preventDefault();
    alert("createRoom()")
  }
  
  render(){
    console.log('Home component rendered');

    return (   
      <div className="jumbotron jumbotron-fluid">
        <div className="pt-5 container text-center">
          <h1 className="display-3">Watch Videos with Friends!</h1>
          <p className="lead">All you do is create a room and send the link to your friends!</p>
          <button 
            onClick={this.createRoom} 
            className="btn btn-primary">
            Create a Room
          </button>
        </div>
      </div>
    )
  }
}