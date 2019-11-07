import React from 'react';
import { connect } from 'react-redux';
import { deleteRestaurant } from '../../../actions/adminActions';
import './RestaurantTableComponent.css';

const RestaurantTableComponent = (props) => {

    const mapRestautants = (restaurants) => {
        const restaurantArray = restaurants.map(restaurant => 
            <tr>
                <th>{ restaurant._id }</th>
                <th>{ restaurant.name }</th>
                <th>{ restaurant.city }</th>
                <th>{ restaurant.address }</th>
                <th>{ restaurant.hours }</th>
                <th>{ restaurant.phone }</th>
                <th>{ restaurant.menuLink }</th>
                <th>{ restaurant.image }</th>
                <th>{ restaurant.reviews.length }</th>
                <button onClick={ () => props.deleteRestaurant(restaurant._id) }>Delete Restaurant</button>
            </tr>
        );
        return restaurantArray;
    };
    
    return (
        <>
            <div id="restaurant-table-component">
                <div className="container-fluid">
                    <div className="card mb-3">
                        <div className="card-header">
                            Restaurants Table
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>City</th>
                                            <th>Address</th>
                                            <th>Hours</th>
                                            <th>Phone</th>
                                            <th>Menu</th>
                                            <th>Image</th>
                                            <th>Number of Reviews</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>City</th>
                                            <th>Address</th>
                                            <th>Hours</th>
                                            <th>Phone</th>
                                            <th>Menu</th>
                                            <th>Image</th>
                                            <th>Number of Reviews</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        { props.restaurants && mapRestautants(props.restaurants)}
                                    </tbody>
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
        restaurants: state.adminReducer.restaurants,
        errors: state.adminReducer.errors,
        message: state.adminReducer.message
    };
};

export default connect(mapStateToProps, { deleteRestaurant })(RestaurantTableComponent);