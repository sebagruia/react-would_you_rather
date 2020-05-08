import {combineReducers } from "redux";

import { usersReducer } from "./reducers/users/usersReducer";
import { chooseLoginReducer } from "./reducers/users/chooseLoginUserReducer";
import { questionsReducer } from "./reducers/questions/questionsReducer";
import { logReducer } from "./reducers/users/logReducer";
import { loadingBarReducer } from 'react-redux-loading-bar';
import {setOptionsReducer} from './reducers/questions/setOptionsReducer';

export const rootReducer = combineReducers({
    usersReducer,
    chooseLoginReducer,
    questionsReducer,
    logReducer,
    setOptionsReducer,
    loadingBar: loadingBarReducer
  });

  export default rootReducer;