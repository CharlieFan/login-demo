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
        dispatch(updateList(res))
    }
}

const createItem = (payload) => {
    return async (dispatch) => {
        let res = await api.todo.addTodo(payload)
        if (res) {
            payload = Object.assign({id: res.id}, payload)
            dispatch(addItem(payload))
        } else {
            dispatch('NOTHING')
        }
    }
}

const saveItem = (payload) => {
    return async (dispatch) => {
        let res = await api.todo.editTodo(payload)
        if (res) {
            dispatch(editItem(payload))
        } else {
            dispatch('NOTHING')
        }
    }
}

export default {
    addItem,
    deleteItem,
    editItem,
    toggleItem,
    saveItem,
    createItem,
    initList
}