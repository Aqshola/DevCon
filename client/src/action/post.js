import axios from "axios";
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";
import { setAlert } from "./alert";

// Get Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/post");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add/remove Like

export const like = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/post/like/${id}`);
    console.log(res.data.likes);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data.likes },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
