import React from 'react';

export default class VideoList extends React.Component{
  constructor(props){
    super(props);
  }

  onSelect = (video, e) =>{
    console.log(video.id.videoId);
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
            {/*<p>{video.id.videoId}</p>*/}
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