import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home.js';
import RestaurantProfile from '../containers/RestaurantProfileContainer/RestaurantProfile';
import Profile from '../containers/ProfileContainer/Profile.js';

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
            <Route path="/restaurant/:restaurant_slug" component={ RestaurantProfile} />
            <PrivateRoute path='/profile' component={ Profile } />
        </Switch>
    );
});