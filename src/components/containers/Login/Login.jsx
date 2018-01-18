import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.scss'

export default class Home extends React.Component {
    state = {
        formData: {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        }
    }

    handleSubmit() {
        console.log(this.state)
    }

    validate(value, name) {
        console.log(value, name)
    }


    render() {
        let a = 1
        return (
            <div className={styles.login_view}>
                <div className={styles.form_wrapper}>
                    <h1>Login</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.handleSubmit()
                    }}>
                        <input type="email"
                            name="email"
                            className={
                                `form-control form-control-lg mb-3 ${ a == 1 ? '' : 'is-invalid'}`
                            }
                            placeholder="Enter email" 
                            onChange={(e) => {
                                console.log(e.target.value)
                            }} 
                            onBlur={(e) => {
                                this.validate(e.target.value, e.target.name)
                            }}/>

                        <input type="password"
                            className="form-control form-control-lg mb-3"
                            placeholder="Enter password" />

                        <button type="submit"
                            className="btn btn-primary btn-lg w-100 mb-3">Login</button>
                        <Link to="/signup">
                            Sign Up Now
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}