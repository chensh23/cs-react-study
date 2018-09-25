import {CLEAR} from "../consts";

const other = (state={},action)=>{
    switch (action.type) {
        case CLEAR:
            return {...state, 'num': 0}
        default:
            return state
    }
}

export default other
