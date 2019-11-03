import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './RestaurantComponent.css';

const RestaurantsComponent = (props) => {

    const mapRestaurants = (restaurants) => {
        const restaurantsArray = restaurants.map(restaurant => 
            <Col
                className="restaurants-section-cards col-3"
                onClick={ () => { props.selectRestaurant(restaurant.slug) }}
            >
                <div className="restaurant-image-div">
                    <img src={ restaurant.image } className="restaurant-image" alt="restaurant"></img>     
                </div>
                <div>
                    <h5>{ restaurant.name }</h5>
                    <h5>Address: { restaurant.address }</h5>
                    <h5>Reviews: { restaurant.reviews.length}</h5>
                </div>
            </Col>
        );
        return restaurantsArray;
    };

    return (
        <>
            <Col id="restaurants-div">
                <Row className="col-row">
                    { props.restaurants && mapRestaurants(props.restaurants) }    
                </Row>
            </Col>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurantReducer.restaurants
    }
}

export default connect(mapStateToProps, null)(RestaurantsComponent);