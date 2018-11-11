import * as consts from "../consts"
import {fromJS} from "immutable"
const defaultState = fromJS({
    inputValue: "123",
    data: [1,2]
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        case consts.CHANGE_INPUT:
            //return {...state,inputValue:action.inputValue};
            //immutable使用set更新值，返回一个新的Map类型的state对象
            return state.set("inputValue",action.inputValue);
        case consts.ADD_TODO: {
           /* const newState = {...state};
            newState.data.push(state.inputValue);
            newState.inputValue = "";
            return newState;*/
            //immutable使用set更新值，返回一个新的Map类型的state对象
           const newState = state.update("data",list=>list.push(state.get("inputValue")));
            return  newState.set("inputValue", "");
        }
        case consts.DELETE_ITEM: {
           /* const newState = {...state};
            newState.data.splice(action.index,1);
            return newState;*/
            //immutable使用set更新值，返回一个新的Map类型的state对象
           const newdata = state.get("data").splice(action.index,1);
            //immutable使用set更新值，返回一个新的Map类型的state对象
            return state.update("data",list=>list.splice(action.index,1));
        }
        default: return state;
    }
}