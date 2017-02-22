import React from 'react';

export default class VideoList extends React.Component{
  constructor(props){
    super(props);
  }

  onSelect = (video, e) =>{
    this.props.socket.emit('current_video', video.id.videoId);
  }

  render(){
    var that = this;
    var videolist;
    if(this.props.videos){
      var videolist = this.props.videos.map(function(video, index){
        return (
          <div onClick={() => that.onSelect(video)} className="card video-card" key={index}>
            <img src={video.snippet.thumbnails.default.url}/>
            <p className="small">{video.snippet.title}</p>
          </div>
        ) 
      });
    }
    

    return(
      <div className="video-list-container">
        {videolist}
      </div>
    )
  }
}


