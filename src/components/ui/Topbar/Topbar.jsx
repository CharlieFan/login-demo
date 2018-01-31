import React from 'react'
import PropTypes from 'prop-types'

const Topbar = (props) => {
    console.log(props)
    
    return (
        <div>
            Hello! { props.userInfo.name} 
        </div>
    )
}

Topbar.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string
    })
}

export default Topbar