function createAction(type) {
    return function(payload) {
        return {
            type,
            payload
        }
    }
}

// sync actions:
const addItem = createAction('ADD_ITEM')
const deleteItem = createAction('DELETE_ITEM')
const editItem = createAction('EDIT_ITEM')
const toggleItem = createAction('TOGGLE_ITEM')

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