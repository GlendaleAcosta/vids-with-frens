import React from 'react';

export default class VideoList extends React.Component{
  constructor(props){
    super(props);
    console.log("VideoList");
    
  }

  renderVideos = () => {
    console.log('hereee');
    if(this.props.videos){
      this.props.videos.map(function(video){
        return(
          <p>{video.id.videoId}</p>
        )
      })
    }
  }

  render(){
    console.log('render video List')
    console.log(this.props.videos);

    var videolist;
    if(this.props.videos){
      var videolist = this.props.videos.map(function(video){
        return (
          <p>{video.id.videoId}</p>
        ) 
      });
    }

    return(
      <div>
        <p>Searched videos</p>
        {videolist}
      </div>
    )
  }
}