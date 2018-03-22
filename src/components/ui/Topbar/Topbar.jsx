import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userActions } from 'states/actions'
import styles from './Topbar.scss'

class Topbar extends Component {
    render() {
        return (
            <div className={styles.topbar}>
                <div>
                    Hello! { this.props.userInfo.username } ({ this.props.userInfo.email })
                </div>
                <div></div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getUserInfo()
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userInfo: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo() {
            return dispatch(userActions.getUserInfo())
        }
    }
}

Topbar.propTypes = {
    userInfo: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string
    }),
    getUserInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)