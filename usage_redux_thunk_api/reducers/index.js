import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  // dummy: () => "hi there", //dummy reducer function
  posts: PostReducer,
  users: UserReducer,
});
