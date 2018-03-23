import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'components/containers/Home/Home'
import { Topbar } from 'components/ui'
import storage from 'utils/storage'

const styles = {
    marginTop: '50px'
}

const routes = (props) => {
    if (storage.getValue('client')) {
        return (
            <div style={styles}>
                <Topbar {...props} />
                <Switch>
                    <Route path={props.match.url + '/home'}
                        component={Home} />
    
                    <Redirect from="/main" to="/main/home"/>
                </Switch>
            </div>
        )
    } else {
        return <Redirect to="/"/>
    }
}

routes.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default routes