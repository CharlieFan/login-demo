import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'components/ui'
import {validator, validateRules} from 'utils/validation'
import styles from './Signup.scss'

export default class Signup extends React.Component {
    // Render:
    render() {
        return (
            <div className={styles.signup_view}>
                <div className={styles.form_wrapper}>
                    <h1>Sign Up</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.handleSubmit()
                    }}>
                        <Input placeholder="Enter Your Email Address"
                            className="mb-3"
                            type="text"
                            name="email"
                            data-name="Email"
                            touched={this.state.formData.email.touched}
                            hasErr={!this.state.formData.email.isValid}
                            errMsg={this.state.formData.email.errMsg}
                            onBlur={this.validate}
                            onChange={this.handleChange} />

                        <Input placeholder="Create a Password"
                            className="mb-3"
                            type="password"
                            name="password"
                            data-name="Password"
                            touched={this.state.formData.password.touched}
                            hasErr={!this.state.formData.password.isValid}
                            errMsg={this.state.formData.password.errMsg}
                            onBlur={this.validate}
                            onChange={this.handleChange} />

                        <Input placeholder="Confirm Your Password"
                            className="mb-3"
                            type="password"
                            name="confirm"
                            data-name="Confirm Password"
                            touched={this.state.formData.confirm.touched}
                            hasErr={!this.state.formData.confirm.isValid}
                            errMsg={this.state.formData.confirm.errMsg}
                            onBlur={this.validate}
                            onChange={this.handleChange} />

                        <button type="submit"
                            className="btn btn-primary btn-lg w-100 mb-3">
                            Signup
                        </button>
                        <Link to="/">
                            Login Now
                        </Link>
                    </form>
                </div>
            </div>
        )
    }

    // State & Props:
    state = {
        formData: {
            email: {
                value: '',
                isValid: false,
                touched: false,
                rules: [
                    validateRules.required,
                    validateRules.isEmail
                ],
                errMsg: ''
            },
            password: {
                value: '',
                touched: false,
                isValid: false,
                rules: [
                    validateRules.required
                ],
                errMsg: ''
            },
            confirm: {
                value: '',
                touched: false,
                isValid: false,
                rules: [
                    validateRules.required
                ],
                errMsg: ''
            }
        }
    }

    // Methods:
    handleChange = (value, name) => {
        let data = {...this.state.formData}
        if (!this.state.formData[name].touched) {
            data[name].touched = true
        }

        data[name].value = value
        this.setState({
            formData: data
        })
    }
    
    confirmPassword(value) {
        if (value !== this.state.formData.password.value) {
            throw new Error('Password does not match')
        }
    }

    validate = async (value, name) => {
        let data = {...this.state.formData}
        if (!this.state.formData[name].touched) {
            data[name].touched = true
        }
        try {
            await validator(value, ...this.state.formData[name].rules)
            if (name === 'confirm') {
                this.confirmPassword(this.state.formData.confirm.value)
            }

            data[name].errMsg = ''
            data[name].isValid = true
            this.setState({
                formData: data
            })


            return true
        } catch (err) {
            data[name].isValid = false
            data[name].errMsg = err.message
            this.setState({
                formData: data
            })
            return false
        }
    }

    async validateForm() {
        let flag = []

        for (let prop in this.state.formData) {
            if (prop) {
                flag.push(await this.validate(this.state.formData[prop].value, prop))
            }
        }

        return flag.reduce((prev, curr) => {
            return curr && prev
        })
    }

    async handleSubmit() {
        if (!await this.validateForm()) {
            return false
        }

        console.log('call api')
    }
}