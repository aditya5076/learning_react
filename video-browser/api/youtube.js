import axios from "axios";

const KEY = "AIzaSyD2O0NeG7T8kUdOAiXh5YM4EIg1Go8BdMQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
     maxResults: 10,
    key: KEY,
  },
});
