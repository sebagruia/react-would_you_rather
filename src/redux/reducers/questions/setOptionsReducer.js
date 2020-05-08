import { SET_OPTION_ONE_TEXT } from "../../actions/questions/setOptionOneText.Action";
import { SET_OPTION_TWO_TEXT } from "../../actions/questions/setOptionTwoText.Action";

const initialState = {
  optionOneText:"",
  optionTwoText:"",

};

export const setOptionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
