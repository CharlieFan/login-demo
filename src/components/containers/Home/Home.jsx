import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
// Actions:
import { todoActions } from 'states/actions'

import styles from './Home.scss'

// Components:
import TodoList from './TodoList/TodoList'

class Home extends React.Component {
    componentDidMount() {
        this.props.initList()
    }

    render() {
        return (
            <div className={styles.home_view}>
                <div className={`${styles.add_input} input-group`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Add New Item</span>
                    </div>
                    <input type="text" className="form-control"
                        value={this.state.text}
                        onChange={(e) => { this.handleChange(e.target.value) }} />
                    <div className="input-group-append">
                        <button className="btn btn-primary"
                            disabled={this.state.isLock}
                            onClick={this.add}>Add</button>
                    </div>
                </div>
                <TodoList />
            </div>
        )
    }

    state = {
        text: '',
        isLock: false
    }

    handleChange(value) {
        this.setState({
            text: value
        })
    }

    add = () => {
        this.setState({
            isLock: true
        })
        let payload = {
            content: this.state.text,
            finish: 0
        }

        // this.props.addNewItem(payload)
        this.props.createItem(payload)
        setTimeout(() => {
            this.setState({
                isLock: false
            })
        }, 200)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createItem(item) {
            return dispatch(todoActions.createItem(item))
        },
        initList() {
            return dispatch(todoActions.initList())
        }
    }
}

Home.propTypes = {
    todos: PropTypes.array,
    createItem: PropTypes.func,
    saveItem: PropTypes.func,
    initList: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Home)
