import Lessons from "./constants";
import axios from "axios";

export const requestLessons = (data) => async (dispatch) => {
    dispatch({
      type: Lessons.LOAD,
    });
    try {
      const json = await axios.get("data.json");
      console.log(json);
      dispatch({
        type: Lessons.LOAD_SUCCESS,
        usersData: json.data,
        isError: false,
      });
    } catch (e) {
      dispatch({
        type: Lessons.LOAD_SUCCESS,
        usersData: [],
        isError: true,
      });
    }
  };