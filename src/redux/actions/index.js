import {INCREAMENT,DECREAMENT,CLEAR,ADD_TODO,CHANGE_INPUT,DELETE_ITEM} from "../consts";

export const plus = ()=> ({
    type: INCREAMENT
})
export const minus = ()=> ({
    type: DECREAMENT
})

export const addTodo = ()=> ({
    type: ADD_TODO
})
export const changeInput = (inputValue)=> ({
    type: CHANGE_INPUT,
    inputValue
})
export const deleteItem = (index)=> ({
    type: DELETE_ITEM,
    index
})
export const clear = ()=> ({
    type: CLEAR
})
