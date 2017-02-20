import React from 'react';
import ChatContainer from 'ChatContainer';
import io from 'socket.io-client'
// import YouTube from 'YouTube';
import YouTube from 'react-youtube';
import QueueContainer from 'QueueContainer';
export default class Room extends React.Component{
  constructor(props){
    super(props);   
    var socket = io('/', {query: {roomId: props.params.roomId}});
    this.state ={
      socket: socket
    }
  }

  componentDidMount(){
    var that = this;
    var {video, socket} = this.state;
  }

  onReady = (video) => {
    var {socket} = this.state;

    socket.on('video_play', function(playTime){
      // console.log("video playing at " + playTime);
      var currentTime = video.target.getCurrentTime();
      
      if (currentTime - playTime > 0.15 || playTime - currentTime < -0.15 ){
        video.target.seekTo(playTime, true);
        video.target.playVideo();
      } else {
        video.target.playVideo();
      }
    });
    
    socket.on('video_paused', function(pauseTime){
      // console.log("video paused at " + pauseTime);
      var currentTime = video.target.getCurrentTime();
      if (currentTime - pauseTime > 0.15 || pauseTime - currentTime < -0.15){
        video.target.seekTo(pauseTime, true);
        video.target.pauseVideo();
      } else {
        video.target.pauseVideo();
      }
    });
    
  }

  onStateChange = (video) => {
    console.log(video);
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
    const opts = {
      height: '500px',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1,
        enablejsapi: 1,
        color: 'red'
      },
    };
    const youtubeStyle = {
      marginTop: '55px',
      height: 'auto',
    }
    // cPAbx5kgCJo
    // 3kKREKoRTMQ
    return (
      <div className="full-screen">
        <div className="col-2 queue-container">
          <QueueContainer />
        </div>
        <div className="col-7" style={youtubeStyle}>
          <YouTube
            videoId="_TSZe3mfGYg"
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