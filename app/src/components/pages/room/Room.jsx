import React from 'react';

export default class Room extends React.Component{
  constructor(props){
    super(props);
   
  }
  
  render(){
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="pt-5 container text-center">
          <h1 className="display-3">Room Component</h1>
        </div>
      </div>
    )
  }
}