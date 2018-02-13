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
    ],
    others: 'fjsklf'
}

const reducer = (state = initState, action) => {
    let copy = Object.assign({}, state)
    switch(action.type) {
        case 'ADD_ITEM':
            copy.todos = copy.todos.concat([action.payload])
            return Object.assign({}, copy)
        default:
            return state
    }
}




export default reducer