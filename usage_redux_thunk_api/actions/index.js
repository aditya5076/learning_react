import jsonplaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// 2ND ALTERNATE WAY TO SOLVE THE XHR PROBLEM === CALLING ACTION-CREATOR FROM ACTION-CREATORS
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //so it wait till we all posts
  // console.log(getState().posts); //NOTE THT GETSTATE IS OF LODASH LIB NOT FRM REACT
  // const uniqueUserId = _.uniq(_.map(getState().posts, "userId")); //retrun unique userId in array format
  // console.log(uniqueUserId); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // uniqueUserId.forEach((id) => dispatch(fetchUser(id)));

  // ******************CHAIN-TOSOLVE ABOVE MAP & FOREACH**********************
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); //to exucte above query
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  return dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  // return _fetchUser(id, dispatch); for lodash way
  const response = await jsonplaceholder.get(`/users/${id}`);
  return dispatch({ type: "FETCH_USER", payload: response.data });
};

// MEMOIZE IS USED SO THT IT DOES NOT CALL THE () REPEATEDLY WHEN WE HITS SAME ENDPOINT (DEMO-XHR)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   return dispatch({ type: "FETCH_USER", payload: response.data });
// });

// WITHOUT REDUX-THUNK
// export const fetchPosts = () => {
//     const response = await jsonplaceholder.get("/posts");
//     return {
//       type: "FETCH_POSTS",
//       payload: response, //it not returns the obj but request
//     };
//   };
