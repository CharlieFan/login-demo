function createAction(type) {
    return function(payload) {
        return {
            type,
            payload
        }
    }
}

const addItem = createAction('ADD_ITEM')
const deleteItem = createAction('DELETE_ITEM')
const editItem = createAction('EDIT_ITEM')
const toggleItem = createAction('TOGGLE_ITEM')

export {
    addItem,
    deleteItem,
    editItem,
    toggleItem
}