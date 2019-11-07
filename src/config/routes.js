import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home.js';
import RestaurantProfile from '../containers/RestaurantProfileContainer/RestaurantProfile';
import Profile from '../containers/ProfileContainer/Profile.js';
import AdminPage from '../containers/AdminContainer/AdminPage';

export default withRouter(() => {
    const currentUser = localStorage.getItem('uid');
    const userRole = localStorage.getItem('user_role');
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render={(props) => (
            currentUser 
                ? <Component { ...props } />
                : <Redirect to='/' />
        )} />
    );

    const AdminRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render={(props) => (
            userRole ==='admin'
                ? <Component { ...props } />
                : <Redirect to='/' />
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path="/restaurant/:restaurant_slug" component={ RestaurantProfile} />
            <PrivateRoute path='/profile' component={ Profile } />
            <AdminRoute path='/admin' component={ AdminPage } />
            <AdminRoute path="/admin/user_table" component={ AdminPage } />
            <AdminRoute path="/admin/restaurant_table" component={ AdminPage } />
        </Switch>
    );
});