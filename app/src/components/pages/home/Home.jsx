import React from 'react';

export default class Home extends React.Component {

  render(){
    return (
      
      <div className="jumbotron jumbotron-fluid ">
        <div className="pt-5 container text-center">
          <h1 className="display-3">Watch Videos with Friends!</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <button className="btn btn-primary">Create a Room</button>
        </div>
      </div>
    
    )
  }
}