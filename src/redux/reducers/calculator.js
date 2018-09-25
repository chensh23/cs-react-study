import {DECREAMENT, INCREAMENT} from "../consts";

 const calculator = (state={value1: 0, value2: 100},action)=>{
    switch (action.type) {
        case INCREAMENT:
            return {...state,'value1': state.value1+1}
        case DECREAMENT:
            return {...state,'value2': state.value2-1}
        default:
            return state
    }
}

export default calculator;
