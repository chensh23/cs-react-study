import {combineReducers} from 'redux'
import calculator from "./calculator.js"
import other from "./other.js"
import todoList from "./todoList.js"

export default combineReducers({
    calculator,
    other,
    todoList
});


