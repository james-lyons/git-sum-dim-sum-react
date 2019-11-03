import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { editReview, deleteReview } from '../../actions/reviewActions';
import './RestaurantProfileComponent.css';

const RestaurantProfileComponent = ({ ...props }) => {

    const mapReviews = (reviews) => {
        const currentUser = localStorage.getItem('uid');
        const reviewArray = reviews.map(review => 
            <div className="review-card">
                <h4>Reviewer: { review.author_name }</h4>
                <h4>{ review.reviewText }</h4>
                { review.author === currentUser && mapButtons(review._id)}
                { review.author === currentUser && editReview(review._id) }
            </div>
        );
        return reviewArray;
    };

    const mapButtons = (review_id) => {
        return (
            <>
                <div className="edit-and-delete-buttons">
                    <Button className="review-buttons btn btn-danger" onClick={ () => props.editReviewDisplay() }>Edit</Button>
                    <Button className="review-buttons btn btn-danger" onClick={ () => props.deleteReview(review_id) }>Delete</Button>
                </div>
            </>
        );
    };

    const editReview = (review_id) => {
        return (
            <Col className="col-12 review-edit-form" style={{ display: props.edit_review_display }}>
                <Form onSubmit={ () => props.editReview(review_id, props.reviewText )}>
                    <Form.Row>
                        <Form.Group className="col-12" controlId="edit-review">
                            <Form.Control
                                required
                                name="reviewText"
                                type="text"
                                as="textarea"
                                rows="4"
                                onChange={ props.handleChange }
                                placeholder="Edit review"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button className="btn btn-danger" type="submit">Submit Edit</Button>
                </Form>
            </Col>
        );
    };

    return (
        <>
            <div id="restaurant-profile-div">
                <Row id="restaurant-profile-row">
                    <Col className="col-4 restaurant-profile-left">
                        <Row>
                            <img className="restaurant-profile-image" src={ props.restaurant.image } alt="restaurant"/>
                        </Row>
                    </Col>
                    <Col className="col-8 restaurant-profile-right">
                        <Row>
                            <Col>
                                <div className="restaurant-profile-content-div">
                                    <div className="restaurant-profile-content-section">
                                        <h5>Name: { props.restaurant.name }</h5>
                                        <h5>Address: { props.restaurant.address }</h5>
                                        <h5>Phone Number: { props.restaurant.phone }</h5>
                                        <h5>Hours: { props.restaurant.hours }</h5>
                                        <h5>Menu Link: <span src={ props.restaurant.menuLink }>{ props.restaurant.menuLink }</span></h5>
                                    </div>
                                </div>
                            </Col>                    
                        </Row>
                        <Row>
                            <Col className="col-12">
                                <div className="restaurant-profile-reviews-section">
                                    <div className="restaurant-profile-reviews-div">
                                        { props.restaurant && mapReviews(props.restaurant.reviews) }
                                    </div>
                                </div>                            
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-12">
                                <div className="review-form-section">
                                    <div className="review-form-div">
                                        <h3>Leave a review!</h3>
                                        { props.reviewErrors && props.reviewErrors.map((err, i) => (
                                            <div className="alert alert-danger alert-dismissible fade show"
                                                style={{ width: '100%' }} role="alert" key={ i }>
                                                { err.message }
                                                    <button className="close" data-dismiss="alert">
                                                        <spam aria-hidden="true">&times;</spam>
                                                    </button>
                                            </div>
                                            ))}
                                            { props.reviewMessage && 
                                                <div className="alert alert-danger alert-dismissible fade show"
                                                    style={{ width: '100% '}} role="alert">
                                                    { props.reviewMessage }
                                                    <button className="close" data-dismiss="alert">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            }
                                        <Form onSubmit={ props.submitReview }>
                                            <Form.Row>
                                                <Form.Group className="col-12" controlId="edit-review">
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
                                            <Button className="btn btn-danger" type="submit">Submit</Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
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

export default connect(mapStateToProps, { editReview, deleteReview })(RestaurantProfileComponent);