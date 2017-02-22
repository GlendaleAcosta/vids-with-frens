import React from 'react';
import ChatContainer from 'ChatContainer';
import io from 'socket.io-client'
import YouTube from 'react-youtube';
import QueueContainer from 'QueueContainer';

export default class Room extends React.Component{
  constructor(props){
    super(props);   
    var socket = io('/', {query: {roomId: props.params.roomId}});
    this.state ={
      socket: socket,
      selectedVideo: 'Gc40IXMt_3c'
    }
  }

  componentDidMount(){
    var that = this;
    var {video, socket} = this.state;
  }

  onReady = (video) => {
    var {socket} = this.state;

    socket.on('video_play', function(playTime){
      var currentTime = video.target.getCurrentTime();
      
      if (currentTime - playTime > 0.15 || playTime - currentTime < -0.15 ){
        video.target.seekTo(playTime, true);
        video.target.playVideo();
      } else {
        video.target.playVideo();
      }
    });
    
    socket.on('video_paused', function(pauseTime){
      var currentTime = video.target.getCurrentTime();
      if (currentTime - pauseTime > 0.15 || pauseTime - currentTime < -0.15){
        video.target.seekTo(pauseTime, true);
        video.target.pauseVideo();
      } else {
        video.target.pauseVideo();
      }
    });
    
  }

  onPlay = (video) => {
    var {socket} = this.state;
    var time = video.target.getCurrentTime();
    socket.emit('video_play', time);
  }

  onPause = (video) => {
    var {socket} = this.state;
    var time = video.target.getCurrentTime();
    socket.emit('video_paused', time);
  }
  
  render(){
    var that = this;
    this.state.socket.on('current_video', function(videoId){
      that.setState({
        selectedVideo: videoId
      })
      
    })
    const opts = {
      height: '500px',
      width: '100%',
      playerVars: {
        autoplay: 0,
        color: 'red'
      },
    };
    const youtubeStyle = {
      marginTop: '55px',
      height: 'auto',
      width: '100%'
    }
    
    return (
      <div className="full-screen">
          <QueueContainer socket={this.state.socket}/>
        <div className="col-7" className="middle" style={youtubeStyle}>
          <YouTube
            className="test"
            videoId={this.state.selectedVideo}
            opts={opts}
            onStateChange = {this.onStateChange}
            onReady={this.onReady}
            onPlay={this.onPlay}
            onPause={this.onPause}
          />
        </div>
        <ChatContainer socket={this.state.socket} roomId={this.props.params.roomId}/>
      </div>
    )
  }
}

