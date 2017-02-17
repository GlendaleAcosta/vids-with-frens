import React from 'react';
import Navbar from 'Navbar';
import Footer from 'Footer';

export default class Main extends React.Component{
  render(){
    return (
      <div>
        <Navbar/>
        {this.props.children}     
      </div>
    )
  }
}