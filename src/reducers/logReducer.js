import { LOGED_IN_OR_OUT } from "../actions/logAction";

const initialLogState = {
  logIn: false
};

export const logReducer = (state = initialLogState, action = {}) => {
  switch (action.type) {
    case LOGED_IN_OR_OUT:
      return { ...state, logIn: action.payload };
    default:
      return state;
  }
};
