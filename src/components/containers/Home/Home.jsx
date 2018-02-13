import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Actions:
import { addItem } from 'states/actions'
import styles from './Home.scss'

// Components:
import TodoList from './TodoList/TodoList'

class Home extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className={styles.home_view}>
                <div className={`${styles.add_input} input-group`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Add New Item</span>
                    </div>
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary"
                            onClick={this.add}>Add</button>
                    </div>
                </div>
                <TodoList list={this.props.todos}/>
            </div>
        )
    }

    add = () => {
        let payload = {
            id: 111,
            text: 'hahahhaha',
            isFinished: false
        }

        this.props.addNewItem(payload)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        everthing: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem(item) {
            return dispatch(addItem(item))
        }
    }
}

Home.propTypes = {
    todos: PropTypes.array,
    addNewItem: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
