import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../../actions/adminActions';
import './UserTableComponent.css';

const UserTableComponent = (props) => {
    
    const mapUsers = (users) => {
        const userArray = users.map(user => 
            <tr>
                <th>{ user.name }</th>
                <th>{ user.email }</th>
                <th>{ user.reviews.length }</th>
                <th>{ user.sign_up_date }</th>
                <th><span onClick={ () => props.deleteUser(user.id) }>Delete User</span></th>
            </tr>
        );
        return userArray;
    };

    return (
        <>
            <div id="user-table-component">
                <div className="container-fluid">
                    <div className="card mb-3">
                        <div className="card-header">
                            Users Table
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Reviews</th>
                                            <th>Signup Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { props.users && mapUsers(props.users)}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Reviews</th>
                                            <th>Signup Date</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.adminReducer.users,
        errors: state.adminReducer.errors,
        message: state.adminReducer.message
    };
};

export default connect(mapStateToProps, { deleteUser })(UserTableComponent);