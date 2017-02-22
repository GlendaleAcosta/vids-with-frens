import React from 'react';
import request from 'superagent';
import VideoList from 'VideoList';

export default class QueueContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      videos: null
    }

  }
    
// &key=AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw
// AIzaSyDFzZCIaalJaODbSEyv0BqN8jvZ4-u4F0w
  onSubmit = (e) => {
    e.preventDefault();
    var that = this;
    var searchVal = that.refs.search.value;
    searchVal = searchVal.split(' ').join('%');
    
    request
      .get('https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q= '
        + that.refs.search.value + 
        "&key=AIzaSyDFzZCIaalJaODbSEyv0BqN8jvZ4-u4F0w")
      .end(function(err, res){
        if(err){ console.log(err)}
        if(res){
          // console.log(res.body.items);
          that.setState({
            videos: res.body.items
          })
        }
      })
  }



  render(){

    return(
      <div className="col-2 queue-container">
        <form onSubmit={this.onSubmit} className="search-form form-inline">
            <input ref="search" className="form-control col-7 search-input" type="text" placeholder="Search Video"/>
            <button className="btn btn-primary col-5 search-btn">Search</button>
        </form>
        <VideoList socket={this.props.socket} videos={this.state.videos}/>
      </div>
    )
  }
}