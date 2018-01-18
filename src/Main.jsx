import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'components/App'
import 'styles/styles.scss'

const root = document.getElementById('app')
// console.log(App)

// ReactDOM.render(<App />, root)
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    )
}

render(App)

if(module.hot) {
    module.hot.accept('components/App', () => {
        render(App)
    })
}