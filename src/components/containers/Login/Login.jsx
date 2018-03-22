import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Input } from 'components/ui'
import styles from './Login.scss'
import {validator, validateRules} from 'utils/validation'
import api from 'api'

export default class Login extends React.Component {
    render() {
        return (
            <div className={styles.login_view}>
                <div className={styles.form_wrapper}>
                    <h1>Login</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.handleSubmit()
                    }}>
                        <Input placeholder="Enter Your Email"
                            type="text"
                            className="mb-3"
                            name="email"
                            data-name="Email"
                            touched={this.state.formData.email.touched}
                            hasErr={!this.state.formData.email.isValid}
                            errMsg={this.state.formData.email.errMsg}
                            onChange={this.handleChange}
                            onBlur={this.validate} />
    
                        <Input placeholder="Enter Your Password"
                            type="password"
                            className="mb-3"
                            name="password"
                            data-name="Password"
                            touched={this.state.formData.password.touched}
                            hasErr={!this.state.formData.password.isValid}
                            errMsg={this.state.formData.password.errMsg}
                            onChange={this.handleChange}
                            onBlur={this.validate} />
    
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
            }
        },
    }

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

    validate = async (value, name) => {
        let data = {...this.state.formData}
        if (!this.state.formData[name].touched) {
            data[name].touched = true
        }
        try {
            await validator(value, ...this.state.formData[name].rules)
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
        let flag1 = await this.validate(this.state.formData.email.value, 'email')
        let flag2 = await this.validate(this.state.formData.password.value, 'password')
        
        return flag1 && flag2
    }
    
    async handleSubmit() {
        if (! await this.validateForm()) return false
        let {email, password} = this.state.formData
        let formData = {
            email: email.value,
            password: password.value
        }
        console.log(formData)

        try {
            let res = await api.user.login(formData)
            console.log(res)
            if (res) {
                this.props.history.push({
                    pathname: '/main/home/'
                })
            }
            
        } catch (err) {
            return false
        }
    }
}


Login.propTypes = {
    history: PropTypes.object
}