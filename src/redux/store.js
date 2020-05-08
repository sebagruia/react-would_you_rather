import rootReducer from "./root-reducer";
import { createStore,applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "./middleware/logger";

//The code below is just for enabling Chrome Redux DEvTools=============
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//The "store" const bellow has the composeEnhancers function as parameter because I wanted to use Chrome Redux DEvTools, the app works without it just fine
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

export default store;