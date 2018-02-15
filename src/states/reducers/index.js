const initState = {
    todos: [
        {
            id: 1,
            text: 'Shopping',
            isFinished: false
        },
        {
            id: 2,
            text: 'Working',
            isFinished: false
        },
        {
            id: 3,
            text: 'Meeting with Jane Doe',
            isFinished: false
        }
    ]
}

const reducer = (state = initState, action) => {
    let copy = Object.assign({}, state)
    switch(action.type) {
        case 'ADD_ITEM':
            copy.todos = copy.todos.concat([action.payload])
            return Object.assign({}, copy)
        case 'DELETE_ITEM':
            copy.todos = copy.todos.filter(item => {
                return item.id !== action.payload
            })
            return Object.assign({}, copy)
        case 'EDIT_ITEM': {
            copy.todos = copy.todos.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        id: item.id,
                        text: action.payload.text,
                        isFinished: item.isFinished
                    }
                } else {
                    return item
                }
            })

            return Object.assign({}, copy)
        }
        case 'TOGGLE_ITEM': {
            copy.todos = copy.todos.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        id: item.id,
                        text: item.text,
                        isFinished: !item.isFinished
                    }
                } else {
                    return item
                }
            })

            return Object.assign({}, copy)
        }
        default:
            return state
    }
}




export default reducer