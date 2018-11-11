import * as consts from "../consts";
import { fromJS } from "immutable"
const defaultState = fromJS({
    data: []
})
export default (state=defaultState,action)=>{
    switch (action.type) {
        case consts.TABLE_LIST:
            return state.set("data",action.data);
        default: return state;
    }
}