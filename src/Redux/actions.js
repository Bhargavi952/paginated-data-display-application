import {
  FETCH_USERDETAILS_REQUEST,
  FETCH_USERDETAILS_SUCCESS,
  FETCH_USERDETAILS_FAILURE,
} from "./actionType";
import axios from "axios";

const fetchDetailsRequest = () => {
  return {
    type: FETCH_USERDETAILS_REQUEST,
  };
};
const fetchDetailsSuccess = (payload) => {
  return {
    type: FETCH_USERDETAILS_SUCCESS,
    payload: payload,
  };
};

const fetchDetailsFailure = (error) => {
  return {
    type: FETCH_USERDETAILS_FAILURE,
    payload: error,
  };
};

// fetching all the user deatils
const fetchUserDetails = () => async (dispatch) => {
  dispatch(fetchDetailsRequest());
  try {
    let response = await axios.get(
      "https://json-server-mocker-data.herokuapp.com/Userdetails"
    );
    // console.log(response.data);
    dispatch(fetchDetailsSuccess(response.data));
  } catch (error) {
    dispatch(fetchDetailsFailure(error));
  }
};

export default fetchUserDetails;
