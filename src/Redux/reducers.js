import {
  FETCH_USERDETAILS_REQUEST,
  FETCH_USERDETAILS_SUCCESS,
  FETCH_USERDETAILS_FAILURE,
} from "./actionType";
const initState = {
  userDetailsAData: [],
  isLoading: false,
};

export const userDeatilsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_USERDETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_USERDETAILS_SUCCESS: {
      return {
        ...state,
        userDetailsAData: payload,
        isLoading: false,
      };
    }
    case FETCH_USERDETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
