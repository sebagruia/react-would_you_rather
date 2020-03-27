import { RECEIVE_USERS } from "../actions/receiveUsersAction";

const initialStateUsers = {
  users:[]
};

export const usersReducer = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: Object.values(action.payload)};
    default:
      return state;
  }
};
