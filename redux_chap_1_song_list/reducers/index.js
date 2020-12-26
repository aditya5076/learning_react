import { combineReducers } from "redux";
export const songListReducer = () => {
  return [
    { title: "chal bombay", duration: "3:00" },
    { title: "machayenge", duration: "3:50" },
    { title: "gandhi money", duration: "4:00" },
    { title: "stillWiz", duration: "4:20" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songsList: songListReducer,
  selectedSong: selectedSongReducer,
});
