import { RECEIVE_USERS } from "../actions/receiveUsersAction";
import { ADD_QUESTION_TO_USER } from "../actions/addQuestionToUserAction";

const initialStateUsers = {
  users: {}
};

export const usersReducer = (state = initialStateUsers, action = {}) => {
  const formattedQuestion = action.payload;
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
              formattedQuestion.id
            ])
          }
        }
      };
    default:
      return state;
  }
};
