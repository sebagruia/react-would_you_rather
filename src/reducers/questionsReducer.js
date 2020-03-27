import {RECEIVE_ALL_QUESTIONS} from '../actions/receiveAllQuestionsAction';

const initialQuestionState = {
    questions:[]
}


export const questionsReducer = (state=initialQuestionState, action={})=>{
        switch(action.type){
            case RECEIVE_ALL_QUESTIONS:
                return {...state, questions:Object.values(action.payload)};
                default:
                    return state
        }
}