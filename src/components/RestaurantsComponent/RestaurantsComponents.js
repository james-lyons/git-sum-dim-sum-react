import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './RestaurantComponent.css';

const RestaurantsComponent = (props) => {
    
    const mapRestaurants = (restaurants) => {
        const restaurantsArray = restaurants.map(restaurant => 
            <div className="col-lg-3 col-md-6 mb-4 restaurants-section-cards"
                onClick={ () => { props.selectRestaurant(restaurant.slug) }}
            >
                <div className="card h-100 restaurant-card">
                    <img className="card-img-top" src={ restaurant.image } alt="restaurant" />
                    <div className="card-body restaurant-card-body">
                        <h4 className="card-title">{ restaurant.name }</h4>
                        <p className="card-text">Address: { restaurant.address }</p>
                        <p className="card-text">Reviews: { restaurant.reviews.length }</p>
                    </div>
                </div>
          </div>
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
    };
};

export default connect(mapStateToProps, null)(RestaurantsComponent);