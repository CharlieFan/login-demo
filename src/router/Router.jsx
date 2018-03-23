import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components:
import PrivateRoute from './PrivateRoute'
import Login from 'components/containers/Login/Login'
import Signup from 'components/containers/Signup/Signup'


const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main" component={PrivateRoute} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes