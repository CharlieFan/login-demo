import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('app')

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

ReactDOM.render(<h1>hello</h1>, root)
ReactDOM.render(<App />, root)