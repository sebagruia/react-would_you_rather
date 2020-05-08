import { RECEIVE_ALL_QUESTIONS } from "../../actions/questions/receiveAllQuestionsAction";
import { ADD_QUESTION } from "../../actions/questions/addQuestionAction";
import { SAVE_ANSWER } from "../../actions/questions/saveAnswerAction";
import { SET_OPTION_ONE_TEXT } from "../../actions/questions/setOptionOneText.Action";
import { SET_OPTION_TWO_TEXT } from "../../actions/questions/setOptionTwoText.Action";

const initialQuestionState = {
  questions: {},
  optionOneText:"",
  optionTwoText:""

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
      case SET_OPTION_ONE_TEXT:
      return {
        ...state,
        optionOneText:action.payload
      };
    case SET_OPTION_TWO_TEXT:
      return {
        ...state,
        optionTwoText:action.payload
      };
    default:
      return state;
  }
};
