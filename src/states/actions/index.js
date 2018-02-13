const addItem = (payload) => {
    return {
        type: 'ADD_ITEM',
        payload
    }
}

export {
    addItem
}