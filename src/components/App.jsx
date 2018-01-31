import React from 'react'
import Router from 'router/Router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'states/reducers'

const store = createStore(reducer)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
