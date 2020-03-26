import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from './middleware/logger';
import {usersReducer} from './reducers/usersReducer';
import {chooseLoginReducer} from './reducers/chooseLoginUserReducer';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({usersReducer, chooseLoginReducer});
//The code below is just for enabling Chrome Redux DEvTools=============
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//The "store" const bellow has the composeEnhancers function as paramter because I wanted to use Chrome Redux DEvTools, the app works without it just fine 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
