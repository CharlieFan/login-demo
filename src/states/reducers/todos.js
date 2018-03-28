import ActionTypes from 'states/actions/todoActions/types'

const initState = {
    todos: [
        // {
        //     id: 1,
        //     text: 'Shopping',
        //     isFinished: false
        // }
    ]
}

const reducer = (state = initState, action) => {
    let copy = Object.assign({}, state)
    switch(action.type) {
        case ActionTypes['ADD_ITEM']:
            copy.todos = copy.todos.concat([action.payload])
            return Object.assign({}, copy)
        case ActionTypes['DELETE_ITEM']:
            copy.todos = copy.todos.filter(item => {
                return item.id !== action.payload
            })
            return Object.assign({}, copy)
        case ActionTypes['EDIT_ITEM']: {
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
        case ActionTypes['TOGGLE_ITEM']: {
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
        case ActionTypes['UPDATE_LIST']: {
            copy.todos = copy.todos.concat(action.payload)
            console.log(copy.todos)
            
            return Object.assign({}, copy)
        }
        default:
            return state
    }
}

export default reducer