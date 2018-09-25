import {INCREAMENT,DECREAMENT,CLEAR} from "../consts";

export const plus = ()=> ({
    type: INCREAMENT
})
export const minus = ()=> ({
    type: DECREAMENT
})

export const clear = ()=> ({
    type: CLEAR
})
