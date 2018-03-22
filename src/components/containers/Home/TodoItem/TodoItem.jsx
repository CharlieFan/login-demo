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
                value={this.state.text}
                onChange={(e) => { this.handleChange(e.target.value) }}/>
        )

        return (
            <li className={`d-flex justify-content-between ${styles.todo_item}`}>
                <input type="checkbox" value={this.state.isFinished}
                    onChange={this.toggoleFinish} />

                <p className={this.props.item.isFinished ? styles.finished : ''}>
                    {
                        this.state.isEdit ?
                            editInput :
                            this.state.text
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
        text: this.props.item.text,
        isEdit: false,
    }

    handleChange = (value) => {
        this.setState({
            text: value
        })
    }

    toggoleFinish = () => {
        this.props.toggleItem(this.props.item.id)
    }

    enableEdit = () => {
        console.log(this.props.item.id)
        
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
        this.props.deleteItem(this.props.item.id)
    }

    editItem = () => {
        this.props.editItem(this.props.item.id, this.state.text)
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
        editItem(id, text) {
            return dispatch(todoActions.editItem({ id, text }))
        },
        toggleItem(id) {
            return dispatch(todoActions.toggleItem({ id }))
        }
    }
}


export default connect(null, mapDispatchToProps)(TodoItem)