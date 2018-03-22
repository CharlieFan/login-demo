import ActionTypes from 'states/actions/userActions/types'
const initState = {
    username: 'somebody',
    email: 'somebody@example.com'
}

const reducer = (state = initState, action) => {
    let copy = Object.assign({}, state)

    switch(action.type) {
        case ActionTypes['UPDATE_USER_INFO']:
            copy.email = action.payload.email
            copy.username = action.payload.username
            return Object.assign({}, copy)
        default:
            return state
    }
}

export default reducer