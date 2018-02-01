import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import styles from './TodoItem.scss'

const TodoItem = (props) => {
    return (
        <li className={`d-flex justify-content-between ${styles.todo_item}`}>
            <input type="checkbox"/>

            <p>
                Shopping
            </p>

            <div>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
}



export default TodoItem