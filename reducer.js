import Lessons from "./constants";

const initalState = {
  usersData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case Lessons.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Lessons.LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.usersData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;