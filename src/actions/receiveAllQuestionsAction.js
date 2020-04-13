import {_getQuestions} from '../DATA/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';



export const receiveAllQuestionsAction = ()=>(dispatch)=>{
    dispatch(showLoading());
   return _getQuestions()
   .then((questions)=>{
        dispatch({
            type:RECEIVE_ALL_QUESTIONS,
            payload:questions
        });
        dispatch(hideLoading());
   })

}