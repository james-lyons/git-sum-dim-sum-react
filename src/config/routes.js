import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home.js';
import Profile from '../containers/ProfileContainer/Profile.js'

export default withRouter(() => {
    const currentUser = localStorage.getItem('uid');
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render={(props) => (
            currentUser 
                ? <Component { ...props } />
                : <Redirect to='/' />
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <PrivateRoute path='/profile' component={ Profile } />
        </Switch>
    );
});