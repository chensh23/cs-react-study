import * as consts from "../consts";
import axios from "axios"
import {fromJS} from "immutable"
export const plus = ()=> ({
    type: consts.INCREAMENT
})
export const minus = ()=> ({
    type: consts.DECREAMENT
})

export const addTodo = ()=> ({
    type: consts.ADD_TODO
})
export const changeInput = (inputValue)=> ({
    type: consts.CHANGE_INPUT,
    inputValue
})
export const deleteItem = (index)=> ({
    type: consts.DELETE_ITEM,
    index
})
export const clear = ()=> ({
    type: consts.CLEAR
})
export const tableList = (data) => ({
    type: consts.TABLE_LIST,
    data
})
export const getList = () => (dispatch) => {
    return axios.get("/api/test.json").then(
        (res) => {
            dispatch(tableList(fromJS(res.data)));
        }
    ).catch((err) => console.log(err))
}
