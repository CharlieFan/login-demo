import React from 'react'
import PropTypes from 'prop-types'
import styles from './Topbar.scss'

const Topbar = (props) => {
    // console.log(props)
    
    return (
        <div className={styles.topbar}>
            <div>
                Hello! { props.userInfo.name}
            </div>
            <div></div>
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