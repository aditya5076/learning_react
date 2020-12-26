import "./VideoItem.css";
import React from "react";

function VideoItem({ video, onVideoSelect }) {
  // console.log(video);
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
        srcSet=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;