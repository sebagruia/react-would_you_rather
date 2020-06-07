import {combineReducers } from "redux";

import { usersReducer } from "./reducers/users/usersReducer";
import { questionsReducer } from "./reducers/questions/questionsReducer";
import { loadingBarReducer } from 'react-redux-loading-bar';

export const rootReducer = combineReducers({
    usersReducer,
    questionsReducer,
    loadingBar: loadingBarReducer
  });

  export default rootReducer;