import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import storage from 'utils/storage.js'

// components:
import PrivateRoute from './PrivateRoute'
import Login from 'components/containers/Login/Login'
import Signup from 'components/containers/Signup/Signup'


const routes = () => {
    let token = storage.getValue('client')
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main" render={
                    (props) => {
                        // console.log(token)
                        
                        if (token) {
                            return <PrivateRoute {...props} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }
                } />

                <Route path="/signup" component={Signup} />
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes