import { SET_LOGIN_USER } from '../actions/setLoginUserAction';

const initialStateLogin = {
    loginField: ''
}

export const chooseLoginReducer = (state = initialStateLogin, action = {}) => {
    switch (action.type) {
        case SET_LOGIN_USER:
            return { ...state, loginField: action.payload };
        default:
            return state;
    }
}