import  {_saveQuestion} from  '../../../DATA/_DATA';
export const ADD_QUESTION = "ADD_QUESTION";


export const addQuestion = (question)=>(dispatch)=>{
    return _saveQuestion(question)
    .then((formattedQuestion)=>{
        dispatch({
            type:ADD_QUESTION,
            payload:formattedQuestion
        })
    })

}