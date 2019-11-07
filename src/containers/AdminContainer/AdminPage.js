import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminSideBarComponent from '../../components/AdminComponent/SideBarComponent/AdminSideBarComponent';
import AddRestaurantComponent from '../../components/AdminComponent/AddRestaurantComponent/AddRestaurantComponent';
import UserTableComponent from '../../components/AdminComponent/UserTableComponent/UserTableComponent';
import RestaurantTableComponent from '../../components/AdminComponent/RestaurantTableComponent/RestaurantTableComponent';
import { fetchUsers, fetchRestaurants } from '../../actions/adminActions';
import '../../CSS/sb_bootstrap/sb-admin.css';

class AdminPage extends React.Component {
    state = {
        role: null
    };

    componentDidMount = () => {
        this.props.fetchUsers();
        this.props.fetchRestaurants();
        this.setState({ role: localStorage.getItem('user_role') })
    };

    changePage = (newPage) => {
        this.setState({
            page: newPage
        });
        this.handlePageRender()
    };

    render() {
        return (
            <>
                <div id="wrapper">
                    <AdminSideBarComponent />
                        <Route exact path="/admin" component={ AddRestaurantComponent } />
                        <Route path="/admin/user_table" component={ UserTableComponent } />
                        <Route path="/admin/restaurant_table" component={ RestaurantTableComponent } />
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        errors: state.adminReducer.errors,
        message: state.adminReducer.message
    };
};

export default withRouter(connect(mapStateToProps, { fetchUsers, fetchRestaurants })(AdminPage));