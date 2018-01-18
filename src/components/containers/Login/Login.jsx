import React from 'react'
import styles from './Login.scss'

export default class Home extends React.Component {
    state = {
        formData: {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className={styles.login_view}>
                <h1>Login</h1>
                <button type="button" className="btn btn-primary">Primary</button>
            </div>
        )
    }
}