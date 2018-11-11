import {ADD_TODO,CHANGE_INPUT,DELETE_ITEM} from "../consts"

const defaultState = {
    inputValue: "",
    data: []
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state,inputValue:action.inputValue};
        case ADD_TODO: {
            const newState = {...state};
            newState.data.push(state.inputValue);
            newState.inputValue = "";
            return newState;
        }
        case DELETE_ITEM: {
            const newState = {...state};
            newState.data.splice(action.index,1);
            return newState;
        }
        default: return state;
    }
}