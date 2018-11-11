import {combineReducers} from 'redux-immutable'
import calculator from "./calculator.js"
import other from "./other.js"
import todoList from "./todoList.js"
import demo5 from "./demo5.js"

export default combineReducers({
    calculator,
    other,
    todoList,
    demo5
});


