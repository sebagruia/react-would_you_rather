import {_getQuestions} from '../DATA/_DATA';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';


export const receiveAllQuestionsAction = ()=>(dispatch)=>{
   return _getQuestions()
   .then((questions)=>{
        dispatch({
            type:RECEIVE_ALL_QUESTIONS,
            payload:questions
        })
   })

}