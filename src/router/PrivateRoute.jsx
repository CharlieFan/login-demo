import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'components/containers/Home/Home'

const routes = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + '/home'}
                component={Home} />

            <Redirect from="/main"
                to="/main/home"/>
        </Switch>
    )
}

routes.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default routes