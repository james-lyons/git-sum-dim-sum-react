import React from 'react';
import { connect } from 'react-redux';
import '../AdminPageCss.css'

const AdminSideBarComponent = (props) => {
    return (
        <>
            <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/admin" >
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/admin/user_table" >
                        <span>Users</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/admin/restaurant_table" >
                        <span>Restaurants</span>
                    </a>
                </li>
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.adminReducer.users,
        restaurants: state.adminReducer.restaurants,
        errors: state.adminReducer.errors,
        message: state.adminReducer.message
    };
};

export default connect(mapStateToProps, null)(AdminSideBarComponent);