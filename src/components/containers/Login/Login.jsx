import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.scss'
import {validator, validateRules} from 'utils/validation'

// console.log(validateRules.maxLength(6)('a')s)

export default class Home extends React.Component {
    state = {
        formData: {
            email: {
                value: '',
                isValid: false,
                err: ''
            },
            password: {
                value: '',
                isValid: false,
                err: ''
            }
        }
    }

    handleChange(value, name) {
        let data = {...this.state.formData}
        data[name].value = value
        this.setState({
            formData: data
        })
    }

    handleSubmit() {
        console.log(this.state)
    }

    async validate(value, name) {
        // console.log(`${name}: ${value}`)
        switch (name) {
            case 'email':
                try {
                    await validator(value , validateRules.required, validateRules.isEmail)
                    let data = {...this.state.formData}
                    data.email.isValid = true
                    this.setState({
                        formData: data
                    })
                } catch (err) {
                    // console.log(err.message)
                    let data = {...this.state.formData}
                    data.email.isValid = false
                    data.email.err = `${name} ${err.message}`
                    this.setState({
                        formData: data
                    })
                }
                break
            case 'password':
                try {
                    await validator(value , validateRules.required, validateRules.minLength(6), validateRules.maxLength(24))
                } catch (err) {
                    console.log(err.message)
                }
                break
            default:
                return 
        }
    }


    render() {
        return (
            <div className={styles.login_view}>
                <div className={styles.form_wrapper}>
                    <h1>Login</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.handleSubmit()
                    }}>
                        <div className="input-group mb-3">
                            <input type="email"
                                name="email"
                                className={
                                    `form-control form-control-lg ${ this.state.formData.email.isValid ? '' : 'is-invalid'}`
                                }
                                placeholder="Enter email" 
                                onChange={(e) => {
                                    this.handleChange(e.target.value, e.target.name)
                                }} 
                                onBlur={(e) => {
                                    this.validate(e.target.value, e.target.name)
                                }} />

                            <p className="invalid-feedback">
                                {this.state.formData.email.err}
                            </p>
                        </div>

                        <div className="input-group mb-3">
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
                        </div>

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