import { _getUsers } from "../DATA/_DATA";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsersAction = () => dispatch => {
  return _getUsers().then(users => {
    dispatch({
      type: RECEIVE_USERS,
      payload:users
    });
  });
};
