import { RECEIVE_USERS } from "../actions/receiveUsersAction";
import { ADD_QUESTION_TO_USER } from "../actions/addQuestionToUserAction";
import { SAVE_ANSWER } from "../actions/saveAnswerAction";

const initialStateUsers = {
  users: {},
};

export const usersReducer = (state = initialStateUsers, action = {}) => {
  const formattedQuestion = action.payload;
  console.log(action.payload);
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: action.payload };
    case ADD_QUESTION_TO_USER:
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
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.authedUser]: {
            ...state.users[action.payload.authedUser],
            answers: {
              ...state.users[action.payload.authedUser].answers,
              [action.payload.qid]: action.payload.answer,
            },
          },
        },
      };

    default:
      return state;
  }
};
