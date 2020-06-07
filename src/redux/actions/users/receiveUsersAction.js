import { _getUsers } from '../../../DATA/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsersAction = () => async dispatch => {
  dispatch(showLoading());
  const users = await _getUsers();
  dispatch({
    type: RECEIVE_USERS,
    payload: users
  });
  dispatch(hideLoading());
};

