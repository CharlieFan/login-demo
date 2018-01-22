import React from 'react'
import PropTypes from 'prop-types'
import { validator } from 'utils/validation'

export default class Home extends React.Component {
    static defaultProps = {
        type: 'text',
        touched: false,
        hasErr: false,
        errMsg: ''
    }

    // state = {
    //     touched: false,
    //     hasErr: false,
    //     errMsg: ''
    // }


    handleChange = (e) => {
        let {name, value} = e.target

        this.props.onChange(value, name)
    }

    // async validate(value, name) {
    //     try {
    //         await validator(value, ...this.props.rules)
    //         this.setState({
    //             hasErr: false
    //         })
    //         this.props.onBlur(true, name)
    //     } catch (err) {
    //         this.setState({
    //             hasErr: true,
    //             errMsg: err.message
    //         })
    //         this.props.onBlur(false, name)
    //     }
    // }

    handleBlur = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.props.onBlur(value, name, this.props.rules)
    }


    render() {
        return (
            <div className={`input-group ${this.props.className}`}>
                <input type={this.props.type}
                    name={this.props.name}
                    className={
                        `form-control form-control-lg ${this.props.hasErr && this.props.touched ? 'is-invalid' : ''}`
                    }
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} 
                    max={this.props.max}
                    min={this.props.min}
                    maxLength={this.props.maxLength}
                    minLength={this.props.minLength} />

                <p className="invalid-feedback">
                    {`${this.props.name} ${this.props.errMsg}`}
                </p>
            </div>
        )
    }
    
    componentDidMount() {
        console.log(this.props)
    }
}

Home.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    // Validation related below:
    rules: PropTypes.array,
    className: PropTypes.string,
    touched: PropTypes.bool,
    hasErr: PropTypes.bool,
    errMsg: PropTypes.string
}