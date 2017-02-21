import React from 'react';

export default class VideoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var videolist;
    console.log(this.props.videos);
    if(this.props.videos){
      var videolist = this.props.videos.map(function(video, index){
        return (
          <div className="card" key={index}>
            <img src={video.snippet.thumbnails.default.url}/>
            <p>{video.snippet.title}</p>
            {/*<p>{video.id.videoId}</p>*/}
          </div>
        ) 
      });
    }
    

    return(
      <div>
        {videolist}
      </div>
    )
  }
}