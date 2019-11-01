import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './RestaurantProfileComponent.css';

const RestaurantProfileComponent = ({ ...props }) => {

    const mapReviews = (reviews) => {
        const reviewArray = reviews.map(review => 
            <div>
                <h4>{ review.author }</h4>
                <h4>{ review.reviewText }</h4>
            </div>
        );
        return reviewArray;
    };

    return (
        <>
            <div id="restaurant-profile-div">
                <Row>
                    <Col className="col-4 restaurant-profile-image-div">
                        <img className="restaurant-profile-image" src={ props.restaurant.image } alt="restaurant"/>
                    </Col>
                    <Col className="col-8 restaurant-profile-content">
                        <div className="restaurant-profile-content-section">
                            <h5>Name: { props.restaurant.name }</h5>
                            <h5>Address: { props.restaurant.address }</h5>
                            <h5>Phone Number: { props.restaurant.phone }</h5>
                            <h5>Hours: { props.restaurant.hours }</h5>
                            <h5>Menu Link: <span src={ props.restaurant.menuLink }>{ props.restaurant.menuLink }</span></h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-4 google-map">
                        <div className="google-map-div"></div>
                    </Col>
                    <Col className="col-8 restaurant-profile-reviews">
                        <div className="restaurant-profile-reviews-section">
                            <h2>Reviews:</h2>
                            { props.restaurant && mapReviews(props.restaurant.reviews) }
                        </div>
                        <div className="review-form-div">
                            <h3>Leave a review!</h3>
                            <Form onSubmit={ () => props.submitReview }>
                                <Form.Row>
                                    <Form.Group className="col-10" controlId="edit-review">
                                        <Form.Control
                                            required
                                            name="reviewText"
                                            type="text"
                                            as="textarea"
                                            rows="4"
                                            onChange={ props.handleChange }
                                            placeholder="Leave a review!"
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurantReducer.restaurant,
        user: state.authReducer.user
    };
};

export default connect(mapStateToProps, null)(RestaurantProfileComponent);