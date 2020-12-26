// GOAL === TO GET selectedSong FROM REDUCER TO UPDATE ONTO THE STATE

import React from "react";
import { connect } from "react-redux";

// REMEMBER THAT FIRST SONG VALUE WILL BE NULL
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>kindly select the song</div>;
  }

  return (
    <div>
      {song.title} and {song.duration}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
