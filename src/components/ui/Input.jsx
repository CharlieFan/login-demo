import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
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
                    Please provide a valid city.
                </p>
            </div>
        )
    }
}