import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from 'components/containers/Login/Login'

const token = 'dsfd'

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main" render={
                    (props) => {
                        if (token) {
                            return <PrivateRoute {...props} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }
                } />

                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes