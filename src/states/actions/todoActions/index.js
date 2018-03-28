import ActionTypes from './types'
import { createAction } from '../utils'
import api from 'api'


// sync actions:
const addItem = createAction(ActionTypes['ADD_ITEM'])
const deleteItem = createAction(ActionTypes['DELETE_ITEM'])
const editItem = createAction(ActionTypes['EDIT_ITEM'])
const toggleItem = createAction(ActionTypes['TOGGLE_ITEM'])
const updateList = createAction(ActionTypes['UPDATE_LIST'])

// async actions:
const initList = () => {
    return async (dispatch) => {
        let res = await api.todo.getList()
        res = res.map((item) => {
            return {
                id: item.todo_id,
                text: item.content,
                isFinished: item.finished === 1
            }
        })
        dispatch(updateList(res))
    }
}

const saveItem = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addItem(payload))
        }, 200)
    }
}

export default {
    addItem,
    deleteItem,
    editItem,
    toggleItem,
    saveItem,
    initList
}