const initState = {
    todos: [
        {
            id: 1,
            text: 'shopping',
            isFinished: false
        },
        {
            id: 2,
            text: 'shopping',
            isFinished: false
        }
    ]
}

const reducer = (state = initState, action) => {
    return state
}

export default reducer