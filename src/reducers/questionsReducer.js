import { RECEIVE_ALL_QUESTIONS } from "../actions/receiveAllQuestionsAction";
import { ADD_QUESTION } from "../actions/addQuestionAction";

const initialQuestionState = {
  questions: {}
};

export const questionsReducer = (state = initialQuestionState, action = {}) => {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_QUESTION:
        return{...state, questions:{...state.questions, [action.payload.id]:action.payload}};
    default:
      return state;
  }
};
