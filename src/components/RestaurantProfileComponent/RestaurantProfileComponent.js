import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { editReview, deleteReview } from '../../actions/reviewActions';
import './RestaurantProfileComponent.css';

const RestaurantProfileComponent = ({ ...props }) => {

    const reviews = () => {
        return (
            <div className="restaurant-profile-reviews-section col-12">
                <div className="row review-container">
                    { props.restaurant && mapReviews(props.restaurant.reviews) }
                </div>
            </div>
        ); 
    };

    const mapReviews = (reviews) => {
        const currentUser = localStorage.getItem('uid');
        const reviewArray = reviews.map(review => 
            <div className="col-md-12 mb-5">
                <div className="card h-100 review-card">
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
                    <div className="card-body">
                        <h3 className="card-title">{ review.author_name }</h3>
                        <p className="card-text">{ review.reviewText }</p>
                    </div>
                    { review.author === currentUser && mapButtons(review._id)}
                    { review.author === currentUser && editReview(review._id) }
                </div>
            </div>
        );
        return reviewArray;
    };

    const mapButtons = (review_id) => {
        return (
            <>
                <div className="edit-and-delete-buttons">
                    <Button className="review-buttons btn btn-danger"
                        onClick={ () => props.editReviewDisplay() }>
                            Edit
                    </Button>
                    <Button className="review-buttons btn btn-danger"
                        onClick={ () => props.deleteReview(review_id) }>
                            Delete
                    </Button>
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
            <div id="restaurant-profile">
                <div className="container">
                    <div className="row align-items-center my-12 restaurant-profile-section">
                        <div className="col-4 restaurant-profile-image-div">
                            <img className="img-fluid rounded mb-4 restaurant-profile-image"
                                src={ props.restaurant.image } alt="" />
                        </div>
                        <div className="col-lg-7 restaurant-profile-content">
                            <p>Name: { props.restaurant.name }</p>
                            <p>Address: { props.restaurant.address }</p>
                            <p>Phone Number: { props.restaurant.phone }</p>
                            <p>Hours: { props.restaurant.hours }</p>
                            <p>Menu Link: <a
                                href={ props.restaurant.menuLink }>
                                    { props.restaurant.menuLink }
                                </a>
                            </p>
                        </div>
                    </div>
                    { props.restaurant.reviews.length && reviews() }
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
                                                    name="Text"
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
                </div>
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