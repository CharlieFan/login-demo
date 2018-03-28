import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todoActions } from 'states/actions'
import styles from './TodoItem.scss'


class TodoItem extends React.Component {
    render() {
        let editBtn = (
            <button className="btn btn-primary"
                onClick={this.enableEdit}>Edit</button>
        )

        let saveBtn = (
            <button className="btn btn-success"
                onClick={this.editItem}>Save</button>
        )

        let editInput = (
            <input type="text"
                value={this.state.content}
                onChange={(e) => { this.handleChange(e.target.value) }}/>
        )

        return (
            <li className={`d-flex justify-content-between ${styles.todo_item}`}>
                <input type="checkbox" checked={this.state.finish}
                    onChange={this.toggoleFinish} />

                <p className={this.state.finish ? styles.finished : ''}>
                    {
                        this.state.isEdit ?
                            editInput :
                            this.state.content
                    }
                </p>


                <div>
                    {
                        this.state.isEdit ?
                            saveBtn :
                            editBtn
                    }
                    <button className="btn btn-danger"
                        onClick={this.deleteItem}>Delete</button>
                </div>
            </li>
        )
    }

    state = {
        content: this.props.item.content,
        finish: this.props.item.finish === 1,
        isEdit: false,
    }

    handleChange = (value) => {
        this.setState({
            content: value
        })
    }

    toggoleFinish = () => {
        this.setState({
            finish: !this.state.finish
        }, () => {
            let finish = this.state.finish ? 1 : 0
            this.props.toggleItem(this.props.item.todo_id, this.props.item.content, finish)
        })
    }

    enableEdit = () => {
        console.log(this.props.item.todo_id)
        
        this.setState({
            isEdit: true
        })
    }

    disableEdit = () => {
        this.setState({
            isEdit: false
        })
    }
    
    deleteItem = () => {
        this.props.deleteItem(this.props.item.todo_id)
    }

    editItem = () => {
        this.props.editItem(this.props.item.todo_id, this.state.content)
        this.disableEdit()
    }
}

TodoItem.propTypes = {
    item: PropTypes.object,
    deleteItem: PropTypes.func,
    editItem: PropTypes.func,
    toggleItem: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem(id) {
            return dispatch(todoActions.deleteItem(id))
        },
        editItem(id, content) {
            return dispatch(todoActions.saveItem({ id, content }))
        },
        toggleItem(id, content, finish) {
            // return dispatch(todoActions.toggleItem({ id }))
            return dispatch(todoActions.saveItem({ id, content, finish }))
        }
    }
}


export default connect(null, mapDispatchToProps)(TodoItem)