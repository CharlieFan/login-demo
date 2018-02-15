import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './TodoList.scss'

// Components:
import TodoItem from '../TodoItem/TodoItem'

const TodoList = (props) => {
    let items = props.list.map(item => {
        return (
            <TodoItem key={item.id} item={item} />
        )
    })
    
    
    return (
        <ul className={styles.todo_list}>
            {items}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.todos
    }
}

TodoList.propTypes = {
    list: PropTypes.array
}

export default connect(mapStateToProps)(TodoList)