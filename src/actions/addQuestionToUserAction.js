import {_saveQuestion } from '../DATA/_DATA';
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const addQuestionToUSer = (question)=>(dispatch)=>{
    _saveQuestion(question)
    .then((formattedQuestion)=>{
        dispatch({
            type:ADD_QUESTION_TO_USER,
            payload:formattedQuestion
        })
    })

}