import React from 'react'
import Router from 'router/Router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from 'states/reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const logger = store => {
//     return next => {
//         return action => {
//             console.log('middleware', action)
//             const result = next(action)
//             console.log('middleware', store.getState())
//             return result
//         }
//     }
// }

// Create Store: 
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

console.log(store);
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
