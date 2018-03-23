import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userActions } from 'states/actions'
import styles from './Topbar.scss'
import api from 'api'

class Topbar extends Component {
    async handleLogout() {
        await api.user.logout()
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        return (
            <div className={styles.topbar}>
                <div></div>
                <div>
                    Hello! { this.props.userInfo.username } ({ this.props.userInfo.email })
                </div>
                <div>
                    <button className="btn btn-warning" onClick={() => {
                        this.handleLogout()
                    }}>
                        Logout
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getUserInfo()
    }
}

const mapStateToProps = (state) => {
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
    history: PropTypes.object,
    userInfo: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string
    }),
    getUserInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)