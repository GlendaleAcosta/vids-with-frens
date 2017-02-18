import React from 'react';

export default class Error404 extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="pt-5 container text-center">
          <h1 className="display-3">ERROR 404: Page Not Found</h1>
        </div>
      </div>
    )
  }

}