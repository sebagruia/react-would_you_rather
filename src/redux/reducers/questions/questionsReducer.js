import { RECEIVE_ALL_QUESTIONS } from "../../actions/questions/receiveAllQuestionsAction";
import { ADD_QUESTION } from "../../actions/questions/addQuestionAction";
import { SAVE_ANSWER } from "../../actions/questions/saveAnswerAction";

const initialQuestionState = {
  questions: {},
};

export const questionsReducer = (state = initialQuestionState, action = {}) => {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_QUESTION:
      return {
        ...state,
        questions: { ...state.questions, [action.payload.id]: action.payload },
      };
    case SAVE_ANSWER:
      const qid = action.payload.qid;
      const answer = action.payload.answer;
      return {
        ...state,
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: state.questions[qid][answer].votes.concat([
                action.payload.authedUser,
              ]),
            },
          },
        },
      };
    default:
      return state;
  }
};
