import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'components/containers/Home/Home'
import { Topbar } from 'components/ui'

const styles = {
    marginTop: '50px'
}

const routes = (props) => {
    return (
        <div style={styles}>
            <Topbar />
            <Switch>
                <Route path={props.match.url + '/home'}
                    component={Home} />

                <Redirect from="/main" to="/main/home"/>
            </Switch>
        </div>
    )
}

routes.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default routes