
const logger = store=>next=>action=>{
    console.group(action.type);
        console.log('This action: ', action);
        const returnValue = next(action);
        console.log('The New STATE: ', store.getState())
    console.groupEnd();
    return returnValue;
}

export default logger;