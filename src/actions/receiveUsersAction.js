import { _getUsers } from "../DATA/_DATA";
import {showLoading, hideLoading} from 'react-redux-loading';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsersAction = () => dispatch => {
  dispatch(showLoading());
  return _getUsers().then(users => {
    dispatch({
      type: RECEIVE_USERS,
      payload:users
    });
    dispatch(hideLoading());
  });
};
