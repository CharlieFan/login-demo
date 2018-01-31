import React from 'react'

export default class Home extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}