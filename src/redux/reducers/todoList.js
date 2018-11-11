import {ADD_TODO,CHANGE_INPUT,DELETE_ITEM} from "../consts"
import {fromJS} from "immutable"
const defaultState = fromJS({
    inputValue: "123",
    data: [1,2]
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        case CHANGE_INPUT:
            //return {...state,inputValue:action.inputValue};
            return state.set("inputValue",action.inputValue);
        case ADD_TODO: {
           /* const newState = {...state};
            newState.data.push(state.inputValue);
            newState.inputValue = "";
            return newState;*/
           const newState = state.update("data",list=>list.push(state.get("inputValue")));
            return  newState.set("inputValue", "");
        }
        case DELETE_ITEM: {
           /* const newState = {...state};
            newState.data.splice(action.index,1);
            return newState;*/
           const newdata = state.get("data").splice(action.index,1);
            return state.update("data",list=>list.splice(action.index,1));
        }
        default: return state;
    }
}