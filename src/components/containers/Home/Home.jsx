import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
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
            id: moment().valueOf(),
            text: this.state.text,
            isFinished: false
        }

        this.props.addNewItem(payload)
        setTimeout(() => {
            this.setState({
                isLock: false
            })
        }, 200)
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

export default connect(null, mapDispatchToProps)(Home)
