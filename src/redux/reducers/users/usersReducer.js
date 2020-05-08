import { RECEIVE_USERS } from "../../actions/users/receiveUsersAction";
import { ADD_QUESTION } from "../../actions/questions/addQuestionAction";
import { SAVE_ANSWER } from "../../actions/questions/saveAnswerAction";
import { LOGED_IN_OR_OUT } from "../../actions/users/logAction";
import { SET_LOGIN_USER } from "../../actions/users/setLoginUserAction";

const initialStateUsers = {
  users: {},
  logIn: false,
  loginField: "",
};

export const usersReducer = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: action.payload };
    case ADD_QUESTION:
      const formattedQuestion = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [formattedQuestion.author]: {
            ...state.users[formattedQuestion.author],
            questions: state.users[formattedQuestion.author].questions.concat([
              formattedQuestion.id,
            ]),
          },
        },
      };
    case SAVE_ANSWER:
      const authedUser = action.payload.authedUser;
      const qid = action.payload.qid;
      return {
        ...state,
        users: {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            answers: {
              ...state.users[authedUser].answers,
              [qid]: action.payload.answer,
            },
          },
        },
      };
    case SET_LOGIN_USER:
      return { ...state, loginField: action.payload };
    case LOGED_IN_OR_OUT:
      return { ...state, logIn: action.payload };

    default:
      return state;
  }
};
