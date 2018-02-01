import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Home.scss'

// Components:
import TodoList from './TodoList/TodoList'

class Home extends React.Component {
    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div className={styles.home_view}>
                <TodoList list={this.props.todos}/>
                {/* <ul>
                    <li className="d-flex justify-content-between">
                        <input type="checkbox"/>

                        <p>
                            Shopping
                        </p>

                        <div>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </li>
                </ul> */}
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

Home.propTypes = {
    todos: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
