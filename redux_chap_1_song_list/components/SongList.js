// GOAL === TO GET SONGSLIST FROM REDUCER TO UPDATE ONTO THE STATE

import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    // console.log(`this is without redux func -->${selectSong()}`);//returns empty object
    //returns an array
    return this.props.songsList.map((song) => {
      // returns jsx element
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props.selectSong);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state); //--> will update the state when we change the store
  return { songsList: state.songsList }; //this used to get props on reducers folder in this component
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList); //notice that it returns the inside () and then invoke tht ()
