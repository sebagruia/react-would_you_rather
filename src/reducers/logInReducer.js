import { LOGED_IN } from "../actions/logInAction";

const initialLogState = {
  logIn: false
};

export const logInReducer = (state = initialLogState, action = {}) => {
  switch (action.type) {
    case LOGED_IN:
      return { ...state, logIn: action.payload };
    default:
      return state;
  }
};
