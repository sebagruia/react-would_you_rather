import {_saveQuestionAnswer} from '../DATA/_DATA';
export const SAVE_ANSWER = "SAVE_ANSWER";

export const saveAnswerAction = (answerObject)=>(dispatch)=>{
    _saveQuestionAnswer(answerObject)
    .then(()=>{
        dispatch({
            type:SAVE_ANSWER,
            payload:answerObject
        });

    });

};