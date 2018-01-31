import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem() {
            return dispatch({type: 'ADD_ITEM'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
