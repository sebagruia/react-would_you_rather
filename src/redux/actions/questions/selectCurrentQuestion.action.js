export const SELECT_CURRENT_QUESTION = "SELECT_CURRENT_QUESTION";

export const selectCurrentQuestion = (question)=>{
    return{
        type:SELECT_CURRENT_QUESTION,
        payload:question
}
}