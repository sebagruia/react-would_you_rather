import { RECEIVE_ALL_QUESTIONS } from "../actions/receiveAllQuestionsAction";
import { ADD_QUESTION } from "../actions/addQuestionAction";
import { SAVE_ANSWER } from "../actions/saveAnswerAction";

const initialQuestionState = {
  questions: {}
};

export const questionsReducer = (state = initialQuestionState, action = {}) => {
  console.log(action.payload);

  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_QUESTION:
      return {
        ...state,
        questions: { ...state.questions, [action.payload.id]: action.payload },
      };
    case SAVE_ANSWER:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.qid]: {
            ...state.questions[action.payload.qid],
            [action.payload.answer]: {
              ...state.questions[action.payload.qid][action.payload.answer],
              votes: state.questions[action.payload.qid][
                action.payload.answer
              ].votes.concat([action.payload.authedUser]),
            },
          },
        },
      };

    default:
      return state;
  }
};
