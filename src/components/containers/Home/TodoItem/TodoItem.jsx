import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './TodoItem.scss'


class TodoItem extends React.Component {
    render() {
        let editBtn = (
            <button className="btn btn-primary"
                onClick={this.enableEdit}>Edit</button>
        )

        let saveBtn = (
            <button className="btn btn-success"
                onClick={this.disableEdit}>Save</button>
        )

        let editInput = (
            <input type="text"
                value={this.state.text}
                onChange={(e) => { this.handleChange(e.target.value) }}/>
        )

        return (
            <li className={`d-flex justify-content-between ${styles.todo_item}`}>
                <input type="checkbox"/>

                <p>
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
                    <button className="btn btn-danger">Delete</button>
                </div>
            </li>
        )
    }

    state = {
        text: this.props.item.text,
        isEdit: false,
        isFinished: this.props.item.isFinished
    }

    handleChange = (value) => {
        this.setState({
            text: value
        })
    }

    toggoleFinish = () => {
        this.setState({
            isFinished: !this.state.isFinished
        })
    }

    enableEdit = () => {
        this.setState({
            isEdit: true
        })
    }

    disableEdit = () => {
        this.setState({
            isEdit: false
        })
    }
}

TodoItem.propTypes = {
    item: PropTypes.object
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItem(item) {
//             return dispatch(addItem(item))
//         }
//     }
// }


// export default connect({}, mapDispatchToProps)(TodoItem)
export default TodoItem