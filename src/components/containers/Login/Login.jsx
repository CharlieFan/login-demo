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
        },
        something: true
    }

    handleChange(value, name) {
        let data = this.state.formData
        data[name].value = value
        this.setState({
            formData: data
        })
    }

    handleSubmit() {
        console.log(this.state)
    }

    validate(value, name) {
        console.log(`${name}: ${value}`)
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
                                this.handleChange(e.target.value, e.target.name)
                            }} 
                            onBlur={(e) => {
                                this.validate(e.target.value, e.target.name)
                            }} />

                        <input type="password"
                            name="password"
                            className="form-control form-control-lg mb-3"
                            placeholder="Enter password" 
                            onChange={(e) => {
                                this.handleChange(e.target.value, e.target.name)
                            }} 
                            onBlur={(e) => {
                                this.validate(e.target.value, e.target.name)
                            }} />

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