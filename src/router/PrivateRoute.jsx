import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'components/containers/Home/Home'
import { Topbar } from 'components/ui'

const userinfo = {
    name: 'UserName',
    email: 'username@example.com'
}

const routes = (props) => {
    return (
        <div>
            <Topbar userInfo={userinfo} />
            <Switch>
                <Route path={props.match.url + '/home/:id'}
                    component={Home} />

                <Redirect from="/main"
                    to="/main/home"/>
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