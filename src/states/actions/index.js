import ActionTypes from './actionTypes'

function createAction(type) {
    return function(payload) {
        return {
            type,
            payload
        }
    }
}

// sync actions:
const addItem = createAction(ActionTypes['ADD_ITEM'])
const deleteItem = createAction(ActionTypes['DELETE_ITEM'])
const editItem = createAction(ActionTypes['EDIT_ITEM'])
const toggleItem = createAction(ActionTypes['TOGGLE_ITEM'])

// async actions:
const saveItem = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addItem(payload))
        }, 2000)
    }
}

export {
    addItem,
    deleteItem,
    editItem,
    toggleItem,
    saveItem
}