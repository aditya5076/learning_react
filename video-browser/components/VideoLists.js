import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoLists extends Component {
  render() {
    const renderedList = this.props.videos.map((video) => (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={this.props.onVideoSelect}
      />
    ));
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}
